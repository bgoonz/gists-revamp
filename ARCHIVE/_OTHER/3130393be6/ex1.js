function Foo() {
   EventEmitter.call(this);
}

var foo = new Foo();

// ...

foo
.either("hello",function(){ alert("Hello"); })
.or("world",function(){ alert("World"); })
.or("yeah",function(){ alert("Yeah!"); });


/* Once any event in the set is fired, unbind all the listeners
in this set. It's kind of like a `once()` that works across a 
set of listeners instead of just one. */