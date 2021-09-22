### Table of Contents

<table style="width:99%;"><colgroup><col style="width: 30%" /><col style="width: 69%" /></colgroup><thead><tr class="header"><th>No.</th><th>Questions</th></tr></thead><tbody><tr class="odd"><td>1</td><td><a href="#How-to-generate-a-random-number-in-a-given-range">Generate a random number in a given range</a></td></tr><tr class="even"><td>2</td><td><a href="#How-to-find-the-difference-between-two-arrays">Find the difference between two arrays</a></td></tr><tr class="odd"><td>3</td><td><a href="#Convert-truthy-falsy-to-boolean">Convert truthy/falsy to boolean(true/false)</a></td></tr><tr class="even"><td>4</td><td><a href="#Repeat-a-string">Repeat a string</a></td></tr><tr class="odd"><td>5</td><td><a href="#Check-how-long-an-operation-takes">Check how long an operation takes</a></td></tr><tr class="even"><td>6</td><td><a href="#Two-ways-to-remove-an-item-in-a-specific-in-an-array">Two ways to remove an item in a specific in an array</a></td></tr><tr class="odd"><td>7</td><td><a href="#Did-you-know-you-can-flat-an-array">Did you know you can flat an array?</a></td></tr><tr class="even"><td>8</td><td><a href="#Get-unique-values-in-an-array">Get unique values in an array</a></td></tr><tr class="odd"><td>9</td><td><a href="#Copy-Text-to-Clipboard">Copy Text to Clipboard</a></td></tr><tr class="even"><td>10</td><td><a href="#Nested-Destructuring">Nested Destructuring</a></td></tr><tr class="odd"><td>11</td><td><a href="#URLSearchParams">URLSearchParams</a></td></tr><tr class="even"><td>12</td><td><a href="#Count-elements-in-an-array">Count elements in an array</a></td></tr><tr class="odd"><td>13</td><td><a href="#Aliases-with-JavaScript-Destructuring">Aliases with JavaScript Destructuring</a></td></tr><tr class="even"><td>14</td><td><a href="#the-objectis-method-determines-whether-two-values-are-the-same-value">The Object.is() method determines whether two values are the same value</a></td></tr><tr class="odd"><td>15</td><td><a href="#Freeze-an-object">Freeze an object</a></td></tr><tr class="even"><td>16</td><td><a href="#Printing-Object-keys-and-values">Printing Object keys and values</a></td></tr><tr class="odd"><td>17</td><td><a href="#Capture-the-right-click-event">Capture the right click event</a></td></tr><tr class="even"><td>18</td><td><a href="#in-html5-you-can-tell-the-browser-when-to-run-your-javascript-code">In HTML5, you can tell the browser when to run your JavaScript code</a></td></tr><tr class="odd"><td>19</td><td><a href="#Nullish-coalescing-operator">Nullish coalescing operator</a></td></tr><tr class="even"><td>20</td><td><a href="#Optional-chaining">Optional chaining</a></td></tr><tr class="odd"><td>21</td><td><a href="#globalThis">globalThis</a></td></tr><tr class="even"><td>22</td><td><a href="#the-second-argument-of-jsonstringify-lets-you-cherry-pick--keys-to-serialize">The second argument of JSON.stringify lets you cherry-pick 🍒 keys to serialize.</a></td></tr><tr class="odd"><td>23</td><td><a href="#Fire-an-event-listener-only-once">Fire an event listener only once.</a></td></tr><tr class="even"><td>24</td><td><a href="#Vanilla-JS-toggle">Vanilla JS toggle</a></td></tr><tr class="odd"><td>25</td><td><a href="#Check-if-a-string-is-a-valid-JSON">Check if a string is a valid JSON</a></td></tr><tr class="even"><td>26</td><td><a href="#getBoundingClientRect">getBoundingClientRect</a></td></tr><tr class="odd"><td>27</td><td><a href="#Check-if-a-node-is-in-the-viewport">Check if a node is in the viewport</a></td></tr><tr class="even"><td>28</td><td><a href="#Notify-when-element-size-is-changed">Notify when element size is changed</a></td></tr><tr class="odd"><td>29</td><td><a href="#Detect-if-Browser-Tab-is-in-the-view">Detect if Browser Tab is in the view</a></td></tr><tr class="even"><td>30</td><td><a href="#Private-class-methods-and-fields">Private class methods and fields</a></td></tr><tr class="odd"><td>31</td><td><a href="#Preventing-paste-into-an-input-field">Preventing paste into an input field</a></td></tr><tr class="even"><td>32</td><td><a href="#The-void-operator">The void operator</a></td></tr><tr class="odd"><td>33</td><td><a href="#replaceAll">replaceAll</a></td></tr><tr class="even"><td>34</td><td><a href="#Required-Function-Params">Required Function Params</a></td></tr><tr class="odd"><td>35</td><td><a href="#Get-input-value-as-a-number">Get input value as a number</a></td></tr><tr class="even"><td>36</td><td><a href="#reduceRight">reduceRight</a></td></tr><tr class="odd"><td>37</td><td><a href="#Abort-Fetch">Abort Fetch</a></td></tr><tr class="even"><td>38</td><td><a href="#How-to-change-the-value-of-an-object-which-is-inside-an-array">How to change the value of an object which is inside an array</a></td></tr><tr class="odd"><td>39</td><td><a href="#Numeric-separators-allow-us-to-improve-our-code-readability">Numeric separators allow us to improve our code readability</a></td></tr><tr class="even"><td>40</td><td><a href="#pay-attention-when-using-every">pay attention when using every</a></td></tr><tr class="odd"><td>41</td><td><a href="#How-to-convert-an-array-of-key-value-tuples-into-an-object">How to convert an array of key-value tuples into an object</a></td></tr><tr class="even"><td>42</td><td><a href="#Native-text-to-speech-JS">Native text to speech JS</a></td></tr></tbody></table>

**[⬆ Back to Top](#table-of-contents)** \#\#\# How to generate a random number in a given range

    // Returns a random number(float) between min (inclusive) and max (exclusive) 

    const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

    getRandomNumber(2, 10)

     // Returns a random number(int) between min (inclusive) and max (inclusive)

    const getRandomNumberInclusive =(min, max)=> {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomNumberInclusive(2, 10);

**[⬆ Back to Top](#table-of-contents)** \#\#\# How to find the difference between two arrays

    const firstArr = [5, 2, 1];
    const secondArr = [1, 2, 3, 4, 5];

    const diff = [
        ...secondArr.filter(x => !firstArr.includes(x)),                    
        ...firstArr.filter(x => !secondArr.includes(x))
    ];
    console.log('diff',diff) //[3,4]


    function arrayDiff(a, b) {
        return [
            ...a.filter(x => b.indexOf(x) === -1),
            ...b.filter(x => a.indexOf(x) === -1)
        ]
    }
    console.log('arrayDiff',arrayDiff(firstArr, secondArr)) //[3,4]




    const difference = (a, b) => {
        const setA = new Set(a);
        const setB = new Set(b);

        return [
            ...a.filter(x => !setB.has(x)),
            ...b.filter(x => !setA.has(x))

        ]
    };

    difference(firstArr, secondArr); //[3,4]
    console.log('difference',difference(firstArr, secondArr))

**[⬆ Back to Top](#table-of-contents)** \#\#\# Convert truthy falsy to boolean

    const myVar = null; 
    const mySecondVar = 1; 

    console.log( Boolean(myVar) ) // false
    console.log( !!myVar ) // false


    console.log( Boolean(mySecondVar) ) // true
    console.log( !!mySecondVar ) // true

**[⬆ Back to Top](#table-of-contents)** \#\#\# Repeat a string

    let aliens = '';

    for(let i = 0 ; i < 6 ; i++){
     aliens += '👽'
    }
    //👽👽👽👽👽👽

    Array(6).join('👽')
    //👽👽👽👽👽👽


    '👽'.repeat(6)
    //👽👽👽👽👽👽

**[⬆ Back to Top](#table-of-contents)** \#\#\# Check how long an operation takes

    //The performance.now() method returns a DOMHighResTimeStamp, measured in milliseconds.
    //performance.now() is relative to page load and more precise in orders of magnitude. 
    //Use cases include benchmarking and other cases where a high-resolution time is required 
    //such as media (gaming, audio, video, //etc.)

    var startTime = performance.now();
    doSomething();
    const endTime = performance.now();
    console.log("this doSomething took " + (endTime - startTime) + " milliseconds.");

**[⬆ Back to Top](#table-of-contents)** \#\#\# Two ways to remove an item in a specific in an array

    //Mutating way
    const muatatedArray = ['a','b','c','d','e'];
    muatatedArray.splice(2,1)
    console.log(muatatedArray) //['a','b','d','e']

    //Non-mutating way
    const nonMuatatedArray = ['a','b','c','d','e'];
    const newArray = nonMuatatedArray.filter((item, index) => !( index === 2 ));
    console.log(newArray) //['a','b','d','e']

**[⬆ Back to Top](#table-of-contents)** \#\#\# Did you know you can flat an array

    const myArray = [2, 3, [4, 5],[7,7, [8, 9, [1, 1]]]];

    myArray.flat() // [2, 3, 4, 5 ,7,7, [8, 9, [1, 1]]]

    myArray.flat(1) // [2, 3, 4, 5 ,7,7, [8, 9, [1, 1]]]

    myArray.flat(2) // [2, 3, 4, 5 ,7,7, 8, 9, [1, 1]]

    //if you dont know the depth of the array you can use infinity
    myArray.flat(infinity) // [2, 3, 4, 5 ,7,7, 8, 9, 1, 1];

**[⬆ Back to Top](#table-of-contents)** \#\#\# Get unique values in an array

    const numbers = [1,1,3,2,5,3,4,7,7,7,8];

    //Ex1
    const unieqNumbers = numbers.filter((v,i,a) => a.indexOf(v )=== i )
    console.log(unieqNumbers) //[1,3,2,5,4,7,8]

    //Ex2
    const unieqNumbers2 = Array.from(new Set(numbers))
    console.log(unieqNumbers2) //[1,3,2,5,4,7,8]

    //Ex3
    const unieqNumbers3 = [...new Set(numbers)]
    console.log(unieqNumbers3) //[1,3,2,5,4,7,8]

    //EX4 lodash
    const unieqNumbers4 = _.uniq(numbers)
    console.log(unieqNumbers4) //[1,3,2,5,4,7,8]

**[⬆ Back to Top](#table-of-contents)** \#\#\# Copy Text to Clipboard

    function copyToClipboard() {

      const copyText = document.getElementById("myInput");
      copyText.select();
      document.execCommand("copy");
      
    }
    //new API
    function copyToClipboard(){
     navigator.clipboard.writeText(document.querySelector('#myInput').value)
    }

**[⬆ Back to Top](#table-of-contents)** \#\#\# Nested Destructuring

    const user = {
     id: 459,
     name: 'JS snippets',
     age:29,
     education:{
      degree: 'Masters'
     }
    }

    const { education : { degree } } = user;
    console.log(degree) //Masters

**[⬆ Back to Top](#table-of-contents)** \#\#\# URLSearchParams

    //The URLSearchParams interface defines utility methods to work with the query string of a URL.

    const urlParams = new URLSearchParams("?post=1234&action=edit");

    console.log(urlParams.has('post')); // true
    console.log(urlParams.get('action')); // "edit"
    console.log(urlParams.getAll('action')); // ["edit"]
    console.log(urlParams.toString()); // "?post=1234&action=edit"
    console.log(urlParams.append('active', '1')); // "?post=1234&action=edit&active=1"

**[⬆ Back to Top](#table-of-contents)** \#\#\# Count elements in an array

    const myFruits = ['Apple','Orange','Mango','Banana','Apple','Apple','Mango']

    //first option
    const countMyFruits = myFruits.reduce((countFruits,fruit) => {
      countFruits[fruit] = ( countFruits[fruit] || 0 ) +1;
      return countFruits
     },{} )
     console.log(countMyFruits)
     // { Apple:3, Banana:1, Mango:2, Orange:1 }
     
     //seconf option
     const fruitsCounter = {};
     
     for( const fruit of myFruits ){
       fruitsCounter[fruit] = fruitsCounter[fruit] ? fruitsCounter[fruit]+1 :1;
     }
      
     console.log(fruitsCounter)
     // { Apple:3, Banana:1, Mango:2, Orange:1 }

**[⬆ Back to Top](#table-of-contents)** \#\#\# Aliases with JavaScript Destructuring

    //There are cases where you want the destructured variable to have a different name than the property name

    const obj = { 
      name: "JSsnippets"                                                    
    };


    // Grabs obj.name as { pageName }
    const { name: pageName } = obj;

    //log our alias
    console.log(pageName) // JSsnippets

**[⬆ Back to Top](#table-of-contents)** \#\#\# The Object.is() method determines whether two values are the same value

    Object.is('foo', 'foo');     // true

    Object.is(null, null);       // true

    Object.is(Nan, Nan);       // true 😱

    const foo = { a: 1 };
    const bar = { a: 1 };
    Object.is(foo, foo);         // true
    Object.is(foo, bar);         // false

**[⬆ Back to Top](#table-of-contents)** \#\#\# Freeze an object

    const obj = { 
      name: "JSsnippets",
      age:29,
      address:{
          street : 'JS'
        }
    };                                                      

    const frozenObject = Object.freeze(obj);

    frozenObject.name = 'weLoveJS'; // Uncaught TypeError

    //Although, we still can change a property’s value if it’s an object:

    frozenObject.address.street = 'React'; // no error, new value is set


    delete frozenObject.name // Cannot delete property 'name' of #<Object>


    //We can check if an object is frozen by using
    Object.isFrozen(obj) //true

**[⬆ Back to Top](#table-of-contents)** \#\#\# Printing Object keys and values

    const obj = { 
      name: "JSsnippets",
      age:29,
    };

    //Object.entries() method is used to return an array consisting of enumerable property 
    //[key, value] pairs of the object which are passed as the parameter.

    for(let [key,value] of Object.entries(obj)){
       console.log(`${key}: ${value}`)
    }

    //expected output:
    // "name: Jssnippets"
    // "age: 29"
    // order is not guaranteed

**[⬆ Back to Top](#table-of-contents)** \#\#\# Capture the right click event

    window.oncontextmenu = () => {
        console.log('right click');
        return false // cancel default menu
    }
    //or

    window.addEventListener('contextmenu', ()=>{
        console.log('right click');
        return false // cancel default menu
    },false)

**[⬆ Back to Top](#table-of-contents)** \#\#\# In HTML5, you can tell the browser when to run your JavaScript code

    //Without async or defer, browser will run your script immediately, before rendering the elements that's below your script tag.
    <script src="myscript.js"></script>

    //With async (asynchronous), browser will continue to load the HTML page and render it while the browser load and execute the script at the same time.
    //Async is more useful when you really don't care when the script loads and nothing else that is user dependent depends upon that script loading.(for scripts likes Google analytics)
    <script async src="myscript.js"></script>

    //With defer, browser will run your script when the page finished parsing. (not necessary finishing downloading all image files. 
    <script defer src="myscript.js"></script>

**[⬆ Back to Top](#table-of-contents)** \#\#\# Nullish coalescing operator

    // an equality check against nullary values (e.g. null or undefined). Whenever the expression to the left of the ?? operator evaluates to either //undefined or null, the value defined to the right will be returned.

    const foo = undefined ?? 'default string';
    console.log(foo);
    // expected output: "default string"


    const age = 0 ?? 30;
    console.log(age);
    // expected output: "0"

**[⬆ Back to Top](#table-of-contents)** \#\#\# Optional chaining

    const car = {}
    const carColor = car.name.color
    console.log(carColor);
    // error- "Uncaught TypeError: Cannot read property 'carColor' of undefined     

    //In JavaScript, you can first check if an object exists, and then try to get one of its properties, like this:
    const carColor = car && car.name && car.name.color;
    console.log(carColor);
    //undefined- no error


    //Now this new optional chaining operator will let us be even more fancy:

    const newCarColor = car?.name?.color;
    console.log(newCarColor) 
    //undefined- no error
                        
    //You can use this syntax today using @babel/plugin-proposal-optional-chaining

**[⬆ Back to Top](#table-of-contents)** \#\#\# globalThis

    Accessing the global property in JavaScript has always posed some difficulty. This is because 
    different platforms have different ways to access it.

    Client-side JavaScript uses window or self

    Node.js uses global

    Web workers use self

    The globalThis property provides a standard way of accessing the global 'this' value across environments. you can access the global object in a consistent manner without having to know which environment the code is being run in. 

    console.log(globalThis) //get the global this depends on your environment

**[⬆ Back to Top](#table-of-contents)** \# The second argument of JSON.stringify lets you cherry-pick 🍒 keys to serialize.

    const user = {
     id: 459,
     name: 'JS snippets',
     age:29,
     education:{
      degree: 'Masters'
     }
    }

    JSON.stringify(user,[name,age], 2)                      

    /*
    returns

    {
      "name": "JS snippets",
      "age": 29
    }


    */

**[⬆ Back to Top](#table-of-contents)** \#\#\# Fire an event listener only once

    const el = document.getElementById("btn");

    function myClickHandler(){
      console.log('this click will only fire once')
    }


    el.addEventListener('click', myClickHandler, {
      once: true,
    });

**[⬆ Back to Top](#table-of-contents)** \#\#\# Vanilla JS toggle

    const span = document.querySelector("span");
    let classes = span.classList;

    span.addEventListener("click", function() {
      let result = classes.toggle("active");

      if (result) {
        console.log("active class was added");
      } else {
        console.log("active class was removed");
      }
    });

**[⬆ Back to Top](#table-of-contents)** \#\#\# Check if a string is a valid JSON

    function isJson(str) {
        try {
            JSON.parse(str);
        } catch (e) {
          //the json is  not ok
            return false;
        }
        //the json is ok
        return true;                                    
    }

**[⬆ Back to Top](#table-of-contents)** \#\#\# getBoundingClientRect

    //getBoundingClientRect provides you with important pieces of data about an
    //HTML element’s size and positioning.

    const bodyBounderies = document.body.getBoundingClientRect();
    // =>  {
    //       top: Number,
    //       left: Number,
    //       right: Number,
    //       bottom: Number,
    //       x: Number,
    //       y: Number,
    //       width: Number,
    //       height: Number,
    //     }

**[⬆ Back to Top](#table-of-contents)** \#\#\# Check if a node is in the viewport bonus: add/remove animation depending if an image is in the viewport https://codepen.io/JSsnippets/pen/PoqrjEY

    const image = document.querySelector('.animate-me');

    observer = new IntersectionObserver((entries) => {
      const [ myImg ] = entries;
        if (myImg.intersectionRatio > 0) {
          myImg.target.classList.add('fancy');
        } else {
          myImg.target.classList.remove('fancy');
        }
    });


    observer.observe(image);

**[⬆ Back to Top](#table-of-contents)** \#\#\# Notify when element size is changed see our codepen: https://codepen.io/JSsnippets/pen/dyYoYVX

    const foo = document.getElementById("foo");

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const cr = entry.contentRect;
        console.log = `Size: ${cr.width}px X ${cr.height}px`;
      }
    });
    observer.observe(foo);

**[⬆ Back to Top](#table-of-contents)** \#\#\# Detect if Browser Tab is in the view play/pause video accordingly see our codepen: https://codepen.io/JSsnippets/pen/gOapPzq


    const video =  document.getElementById("my-video");

    const onVisibilitychange =()=>{
       return document.hidden 
         ? video.pause() 
         : video.play();
    } 

    document.addEventListener("visibilitychange", onVisibilitychange)

**[⬆ Back to Top](#table-of-contents)** \#\#\# Private class methods and fields

    class Students {
      #name;

      constructor(){
        this.#name = "JS snippets";
      }

      #privateMethod() {
        return 'Come and learn Js with us';
      }

      getPrivateMessage() {
          return this.#privateMethod();
      }
    }

    const instance = new Something();
    console.log(instance.name); //=> undefined
    console.log(instance.privateMethod); //=> undefined
    console.log(instance.getPrivateMessage()); //=> Come and learn Js with us

**[⬆ Back to Top](#table-of-contents)** \#\#\# Preventing paste into an input field see our codepen: https://codepen.io/JSsnippets/pen/qBbyMoJ

    const pasteBox = document.getElementById("paste-no-event");
    pasteBox.onpaste = (e) => {
      e.preventDefault();
      return false;
    };

**[⬆ Back to Top](#table-of-contents)** \#\#\# The void operator The void operator evaluates the given expression and then returns undefined.


    void 0;         //returns undefined
    void (0);       //returns undefined
    void {};        //returns undefined
    void "JSsnippets;   //returns undefined
    void (0);       //returns undefined
    void (2 == '2');    //returns undefined
    void anyfunction();     //returns undefined

**[⬆ Back to Top](#table-of-contents)** \#\#\# replaceAll the method string.replaceAll(search, replaceWith) replaces all appearances of search string with replaceWith.


    const str = 'this is a JSsnippets example';

    const updatedStr = str.replace('example', 'snippet'); // 'this is a  JSsnippets snippet'


    The tricky part is that replace method replaces only the very first match of the substring we have passed:


    const str = 'this is a JSsnippets example and examples are great';

    const updatedStr = str.replace('example', 'snippet'); //'this is a JSsnippets snippet and examples are great'

    In order to go through this, we need to use a global regexp instead:


    const str = 'this is a JSsnippets example and examples are great';

    const updatedStr = str.replace(/example/g, 'snippet'); //'this is a JSsnippets snippet and snippets are greatr'

    but now we have new friend in town, replaceAll

    const str = 'this is a JSsnippets example and examples are great';

    const updatedStr = str.replaceAll('example', 'snippet'); //'this is a JSsnippets snippet and snippets are greatr'

**[⬆ Back to Top](#table-of-contents)** \#\#\# Required Function Params Expanding on the default parameter technique, we can mark a parameter as mandatory

    const isRequired = () => {
        throw new Error( 'This is a mandatory parameter.' );
    }


    const getPage = ( pageName = 'Jssnippets', url = isRequired() ) => {
        return `${pageName} ${url}`;
    }

    console.log(getPage());

    //In the above code, url will be undefined and that will try to set the default value for it which is the isRequired() function. It will throw an error as,

    //Uncaught error: This is a mandatory parameter.
    //at isRequired

**[⬆ Back to Top](#table-of-contents)** \#\#\# Get input value as a number

    <input type="number" id="JSsnippets" onkeyup="checkMyType(event)" />

    function checkMyType(event){
      
      console.log(typeof event.target.value) // string
      console.log(typeof event.target.valueAsNumber ) // number

    }

**[⬆ Back to Top](#table-of-contents)** \#\#\# reduceRight

    const arr = ["a", "b", "c", "d", "e"]

    const reduceArray = arr.reduce((acc, current) => {
        return acc + current
    }, "")
    //return abcde

    const reduceRightArray = arr.reduceRight((acc, current) => {
        return acc + current
    }, "")
    //return edcba

**[⬆ Back to Top](#table-of-contents)** \#\#\# Abort Fetch


    //HTML
    <button id="download">Download</button>
    <button id="abort">Abort</button>

    //JS
    let controller;

    document.querySelector('#download').addEventListener('click', () => {
      controller = new AbortController();
      const signal = controller.signal;
      fetch('https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4', {signal})
        .then(() => console.log('done'));
    });

    document.querySelector('#abort').addEventListener('click', function() {
      controller.abort();
    });

**[⬆ Back to Top](#table-of-contents)** \#\#\# How to change the value of an object which is inside an array

    const state = [
      {
        userId: 1,
        name: "JSSnippets",
        isOwner: false,
      },
      {
        userId: 2,
        name: "React",
        isOwner: false,
      },
      {
        userId: 3,
        name: "Vue",
        isOwner: false,
      },
      {
        userId: 4,
        name: "Angular",
        isOwner: false,
      },
    ];

    const newState = state.map((obj) =>
      obj.name === "JSSnippets" ? { ...obj, isOwner: true } : obj           
    );

**[⬆ Back to Top](#table-of-contents)** \#\#\# Numeric separators allow us to improve our code readability

    100_000_000 === 100000000 // true

    300_000 === 300000 //true

**[⬆ Back to Top](#table-of-contents)** \#\#\# pay attention when using every

Calling this method on an empty array will return true for any condition!

    const arr = []
    const result = arr.every(x=> x==5)
    console.log(result) //true

**[⬆ Back to Top](#table-of-contents)** \#\#\# How to convert an array of key-value tuples into an object

    const JSarr = [
        ['name', 'JSsnippets'],
        ['address', 'worldwide'],
        ['year', '2018'],
        ['followers', '15000']

    ];

    const obj = Object.fromEntries(JSarr);
    //{
    //  "name": "JSsnippets",
    // "address": "worldwide",
    //  "year": "2018",
    //  "followers": "15000"
    //}

**[⬆ Back to Top](#table-of-contents)** \#\#\# Native text to speech JS

    const startSpeaking=()=>{

        let msg = document.getElementById("text-to-speech").value;
        let speech = new SpeechSynthesisUtterance();
        
        speech.lang = "en-US";
        speech.text = msg;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;

        window.speechSynthesis.speak(speech);
    }
