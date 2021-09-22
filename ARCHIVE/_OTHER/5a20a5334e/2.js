var data = x ? x : y ? y : z ? z : 0;

// can be formatted as:

var data = x ? x : y ? y : z ? z : 0;

// I call this the "if..else if" pattern, and it's much BETTER. It means:

var data;
if (x) {
  data = x;
} else if (y) {
  data = y;
} else if (z) {
  data = z;
} else {
  data = 0;
}
