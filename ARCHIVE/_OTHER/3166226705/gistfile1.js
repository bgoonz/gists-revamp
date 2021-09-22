function DrawingElement(shapeType, coords, color) {
  this.id = generateUniqueId();
  this.type = shapeType;
  this.fill = color;
  this.x1 = coords.x1;
  this.y1 = coords.y1;
  this.x2 = coords.x2;
  this.y2 = coords.y2;
}

// add some references to shared shape utilities
DrawingElement.prototype.deleteObj = drawing.deleteObj;
DrawingElement.prototype.moveForward = drawing.moveForward;
DrawingElement.prototype.moveBackward = drawing.moveBackward;

var el = new DrawingElement("line", { x1: 10, y1: 10, x2: 50, y2: 100 }, "red");
