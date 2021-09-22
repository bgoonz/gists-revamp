"use strict";

[foo, bar] = TNG(foo, bar);
// NOTE: intentionally not TNG(..) wrapping useBaz(), so that it's
// basically like a "custom hook" that can be called only from other
// TNG-wrapped functions

function foo(origX, origY) {
  var [x, setX] = useState(origX);
  var [y, setY] = useState(origY);
  useBaz("foo"); // calling useBaz(..) like it's a "custom hook"

  console.log(`foo: ${x} ${y}`);

  setX(x * 2);
  setY(bar(y));

  return origX;
}

function bar(curY) {
  var [z, setZ] = useState(curY + 1);
  useBaz("bar"); // calling useBaz(..) like it's a "custom hook"

  console.log(`bar: ${z}`);

  z = z * curY;
  setZ(z);

  return z;
}

// since useBaz(..) isn't TNG-wrapped, it's like a "custom hook", in that
// you don't call it stand-alone, but rather only call it from another
// TNG-wrapped function. thus, useBaz(..) uses the context of the calling
// TNG-wrapped function for its useState(..) calls.
function useBaz(which) {
  var [count, setCount] = useState(0);
  count++;
  setCount(count);
  console.log(`${which} count: ${count}`);
}

foo(3, 9);
// foo count: 1
// foo: 3 9
// bar count: 1
// bar: 10

foo();
// foo count: 2
// foo: 6 90
// bar count: 2
// bar: 90

bar(42);
// bar count: 3  <--- only updated the `count` state of bar(..)
// bar: 8100

foo();
// foo count: 3  <--- `count` state is separate between foo(..) and bar(..)
// foo: 12 8100
// bar count: 4  <--- ditto
// bar: 340200
