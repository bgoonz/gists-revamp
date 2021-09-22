function Dad() {}
Dad.prototype.limbs = {
  leftLeg: true,
  rightLeg: true,
  leftArm: true,
  rightArm: true,
};
Dad.prototype.break = function (limb) {
  this.limbs[limb] = false;
};

function Son() {}
Son.prototype = Object.create(Dad.prototype);

var mydad = new Dad();
var me = new Son();

mydad.break("rightLeg");
me.limbs.rightLeg; // false! my dad broke his leg so my leg is broken?!?
