var data = x ? (y ? (z ? z : y) : x) : 0;

// I call this the "if..if" pattern, and it's BAD. It means:

var data;
if (x) {
  if (y) {
    if (z) {
      data = z;
    } else {
      data = y;
    }
  } else data = x;
} else {
  data = 0;
}
