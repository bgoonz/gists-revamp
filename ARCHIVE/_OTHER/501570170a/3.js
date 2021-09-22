var x = {
  _val: -3,
  valueOf: function () {
    return (this._val *= -1);
  },
};
x > 2 && x < 2;
