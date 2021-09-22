// normal JS function

function stateMachine() {
  var state = 1;

  return {
    next: function () {
      switch (state) {
        case 1:
          // handle state 1
          console.log("state " + state + "!");
          state = 2; // transition to next state
          break;

        case 2:
          // handle state 2
          console.log("state " + state + "!");
          state = 3; // transition to next state
          break;

        case 3:
          // handle state 3
          console.log("state " + state + "!");
          state = 0; // transition to next state
          break;

        default:
          // handle state 0
          console.log("already done.");
      }
    },
  };
}
