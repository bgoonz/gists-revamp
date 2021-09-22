/*

To see a demo of these in use, check out: http://test.getify.com/test-canvas-clear-alt.html

Example uses:
*/

clearCircle(context, /*x=*/ 120, /*y=*/ 80, /*radius=*/ 60);
clearLineSquared(
  context,
  /*x1=*/ 10,
  /*y1=*/ 10,
  /*x2=*/ 53,
  /*y2=*/ 67,
  /*thickness=*/ 5
);
clearLineRounded(
  context,
  /*x1=*/ 15,
  /*y1=*/ 100,
  /*x2=*/ 90,
  /*y2=*/ 170,
  /*thickness=*/ 10
);
clearLineRounded(
  context,
  /*x1=*/ 90,
  /*y1=*/ 170,
  /*x2=*/ 160,
  /*y2=*/ 150,
  /*thickness=*/ 10
);

// code

function dist(x1, y1, x2, y2) {
  x2 -= x1;
  y2 -= y1;
  return Math.sqrt(x2 * x2 + y2 * y2);
}

function clearCircle(context, x, y, radius) {
  context.save();
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, true);
  context.clip();
  context.clearRect(x - radius, y - radius, radius * 2, radius * 2);
  context.restore();
}

function clearLineSquared(context, x1, y1, x2, y2, thickness) {
  var tmp, length;

  // swap coordinate pairs if x-coordinates are RTL to make them LTR
  if (x2 < x1) {
    tmp = x1;
    x1 = x2;
    x2 = tmp;
    tmp = y1;
    y1 = y2;
    y2 = tmp;
  }

  length = dist(x1, y1, x2, y2);

  context.save();
  context.translate(x1, y1);
  context.rotate(Math.atan2(y2 - y1, x2 - x1));
  context.clearRect(0, 0, length, thickness);
  context.restore();
}

function clearLineRounded(context, x1, y1, x2, y2, thickness) {
  if (thickness <= 2) {
    clearLineSquared(context, x1, y1, x2, y2, thickness);
    return;
  }

  var tmp,
    half_thickness = thickness / 2,
    length,
    PI15 = 1.5 * Math.PI,
    PI05 = 0.5 * Math.PI;
  // swap coordinate pairs if x-coordinates are RTL to make them LTR
  if (x2 < x1) {
    tmp = x1;
    x1 = x2;
    x2 = tmp;
    tmp = y1;
    y1 = y2;
    y2 = tmp;
  }

  length = dist(x1, y1, x2, y2);

  context.save();
  context.translate(x1, y1);
  context.rotate(Math.atan2(y2 - y1, x2 - x1));
  x1 = 0;
  y1 = 0;
  x2 = length - 1;
  y2 = 0;
  // draw a complex "line" shape with rounded corner caps

  context.moveTo(x1, y1 - half_thickness);
  context.lineTo(x2, y2 - half_thickness);
  context.arc(x2, y2, half_thickness, PI15, PI05, false);
  context.lineTo(x1, y1 - half_thickness + thickness);
  context.arc(x1, y1, half_thickness, PI05, PI15, false);
  context.closePath();
  x1 -= half_thickness;
  y1 -= half_thickness;

  context.clip();
  context.clearRect(x1, y1, length + thickness, thickness);
  context.restore();
}
