// desugared ES6:

var badVector = { y: 2, x: 1, z: 3 };

var vector1 = {};
({ x: vector1.x, y: vector1.y } = badVector);
var vector2 = {};
({ ["x"]: vector2["x"], ["y"]: vector2["y"] } = badVector);
