/* ****** inline LAB.js here ****** */

// now, include your $LAB chains

$LAB.script(".../facebook.js").wait(function(){
  // facebook init
});

$LAB.script(".../ga.js").wait(function(){
  // ga init
});

$LAB.script(...).wait(...).script(...);

// ...