function Dad() {}
Dad.prototype.broken_leg = false;

// Son "inherits from" Dad
var Son = Object.create(Dad.prototype);

Dad.prototype.broken_leg; // false
Son.broken_leg;           // false

Dad.prototype.broken_leg = true;

Son.broken_leg;           // true