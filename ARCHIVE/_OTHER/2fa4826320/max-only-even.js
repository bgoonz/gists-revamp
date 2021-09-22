// maxOnlyEven():             undefined
// maxOnlyEven(1):            undefined
// maxOnlyEven(1,3):          undefined
// maxOnlyEven(1,4):          4
// maxOnlyEven(2):            2
// maxOnlyEven(undefined,2):  2
// maxOnlyEven(2,4):          4

function maxOnlyEven(num1, num2) {
  var A = num1 % 2 == 0;
  var B = num2 % 2 == 0;
  var C = num1 > num2;

  return A && (!B || C) ? num1 : B ? num2 : undefined;
}
