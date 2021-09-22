// composition

var obj1 = {
	doSomething: function(myId) {
		console.log( "Something: " + myId() );
	}
};

var obj2 = {
	id: "obj2",
	obj1: obj1,
	myId: function() { return this.id; },
	doAnother: function() {
		obj1.doSomething( this.myId.bind(this) );
	}
};

obj2.doAnother(); // Something: obj2