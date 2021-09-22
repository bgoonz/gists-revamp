function* foo(arr){
	for (var i=0; i<arr.length; i++) {
		console.log("foo running: " + i);
		yield (arr[i] * 2);
	}
}

function* bar(arr) {
	var f = foo(arr);
	for (var i=0; i<arr.length; i++) {
		console.log("bar running: " + i);
		yield* f;
	}
}

for (var k of bar([1,2,3])) {
	console.log("k: " + k);
}

// What I expected:

// bar running: 0
// foo running: 0
// k: 2
// bar running: 1
// foo running: 1
// k: 4
// bar running: 2
// foo running: 2
// k: 6



// What we ACTUALLY get:

// bar running: 0
// foo running: 0
// k: 2
// foo running: 1
// k: 4
// foo running: 2
// k: 6
// bar running: 1
// bar running: 2
