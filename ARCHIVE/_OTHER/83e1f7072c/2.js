// ES6 generator

function* stateMachine() {
  // handle state 1
  var state = 1;
  console.log("state " + state + "!");
  state = 2; // transition to next state

  yield;
  // handle state 2
  console.log("state " + state + "!");
  state = 3; // transition to next state

  yield;
  // handle state 3
  console.log("state " + state + "!");
  state = 0; // transition to next state

  // handle state 0
  while (true) {
    yield;
    console.log("already done.");
  }
}
