/*
Let’s imagine that we want to manage cancellation of an async operation using generator functions in javascript. When a secondary event occurs, we can listen for it and force the generator function to return by calling its return method and handle cleanup in the finally block, which will always run before a generator returns. Say we have the following imaginary async generator, which will wait for a second and yield;
//---------------------------------------------------------------------
var generator = async function*() {
    try {
        yield await new Promise((r) => {
            setTimeout(r, 1000)
        }).then(() => 'Waited for 1 sec.')
        // More yields...
    } finally {
        // Do cleanup here. e.g. abort an XHR or invoke a
        // cancellation on some ongoing operation
        console.log('Did cleanup.')
    }
}
//---------------------------------------------------------------------
Then we want to run such a generator to completion in a loop. One way to do this is using an asynchronous for await…of loop. Let’s say we call return before the async operation in the generator is complete.

var it = generator();
 
setTimeout(() => {
    console.log('Force return.');
    it.return();
}, 500)
 
for await (val of it) {
    console.log(val)
}
//---------------------------------------------------------------------
What we expect is finally block being executed before the one second Promise gets resolved, so that we can cancel that operation. But instead, if you go ahead and open your developer console now (if your browser is supporting the syntax) and try the above scenario you get;
//---------------------------------------------------------------------


Force return.
Waited for 1 sec.
Did cleanup.



//---------------------------------------------------------------------

So what happened? Indeed we were able to call return way before the second long Promise was resolved but our async generator preferred to wait until the promise is resolved and after then executed the finally block. Indeed if you think about it, it should be what we actually expect as we are instructing it to do nothing until it resolves with await. The intended operation then, is not possible with this method.


The solution
We need to ditch the async generator and for await…of syntax to make things work as we intended. First, let’s convert the async generator into a regular generator function and take the redux-saga approach and yield the Promise instead;


//---------------------------------------------------------------------

var generator = function*() {
  try {
    yield new Promise(r => {
      setTimeout(r, 1000);
    }).then(() => "Waited for 1 sec.");
    // More yields...
  } finally {
    // This will be clearer later on.
    const res = yield "checkCancelled";
    console.log("Did cleanup.", res);
  }
};


Then our execution loop needs to handle a Promise as a yield value and wait until it is resolved before continuing with the next iteration cycle. A naive implementation can be seen below.

//---------------------------------------------------------------------
For the sake of completeness, we have implemented a generatorRunner here, which will return a cancel function, when executed before the 1 second Promise resolves, will invoke the finally block as we wanted to.

//---------------------------------------------------------------------

var cancel = generatorRunner(generator);
setTimeout(cancel, 500);

//---------------------------------------------------------------------


Prints;


Force return.
Did cleanup. true


//---------------------------------------------------------------------

And when we run the same runner without invoking cancel until completion, console reads;


Waited for 1 sec.
Did cleanup. undefined



//---------------------------------------------------------------------
Here, we also see that the yield with a value of checkCancelled hinted the runner to pass along the cancel status so that the finally block is able to discriminate a cancellation event and act accordingly. We achieve this endeavor with the initiateCancel function, which calls it.next once more after forcefully returning the function with true if the generator requested cancel information. These selective yield responses are handled by returning special ‘effects’ in redux-saga but we are just using strings here, just for demonstration purposes.


//---------------------------------------------------------------------





*/
function asyncGenerator(gen) {
  var awaiteds = new WeakSet();
  var unset = Symbol("unset");
  var returned = Symbol("returned");

  return function wrapped(...args) {
    var def = deferred();
    var it = gen(pwait, ...args);
    var ait = runner(it, def.pr);
    var aitRet = ait.return;
    ait.return = doReturn;
    return ait;

    // ***************************

    function doReturn(v) {
      try {
        def.pr.resolved = true;
        def.resolve(returned);
        return it.return(v);
      } finally {
        aitRet.call(ait);
        ait.return = aitRet;
        def = ait = aitRet = null;
      }
    }
  };

  // ***************************

  function pwait(v) {
    var pr = Promise.resolve(v);
    awaiteds.add(pr);
    return pr;
  }

  async function* runner(it, complete) {
    var res;
    var excp = unset;

    try {
      while (!complete.resolved) {
        if (excp !== unset) {
          res = it.throw(excp);
        } else {
          res = it.next(res);
        }
        if (isPromise(res.value)) {
          if (awaiteds.has(res.value)) {
            awaiteds.delete(res.value);
            try {
              res = await Promise.race([complete, res.value]);
              if (res === returned) {
                return;
              }
            } catch (err) {
              excp = err;
            }
          } else {
            res = yield res.value;
          }
        } else if (res.done) {
          return res.value;
        } else {
          res = yield res.value;
        }
      }
    } finally {
      it = complete = null;
    }
  }

  function isPromise(pr) {
    return pr && typeof pr == "object" && typeof pr.then == "function";
  }

  function deferred() {
    var resolve;
    var pr = new Promise(function c(res) {
      resolve = res;
    });
    return { pr, resolve };
  }
}
