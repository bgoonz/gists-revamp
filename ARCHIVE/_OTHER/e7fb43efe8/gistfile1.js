// proposed:

var badVector = {y: 2, x: 1, z: 3};

var vector1 = {badVector.x, badVector.y};
var vector2 = {badVector['x'], badVector['y']};