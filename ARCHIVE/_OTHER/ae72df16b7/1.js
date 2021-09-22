// examples...
//
// maxEven(): undefined
// maxEven(1): undefined
// maxEven(1,13): undefined
// maxEven(-Infinity,Infinity): undefined
// maxEven(0): 0
// maxEven(-4,3,-6,0,5,2,1,9): 2

function maxEven(num1, ...nums) {
  var maxRest = nums.length > 0 ? maxEven(...nums) : undefined;

  return num1 % 2 == 0 && !(num1 < maxRest) ? num1 : maxRest;
}
