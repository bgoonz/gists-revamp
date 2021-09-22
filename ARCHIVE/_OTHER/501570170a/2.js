function x() { if (x._val > 5) return true; x._val = (x._val || 1) + 1; return x; }
x() === x()() === x()()()