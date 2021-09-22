var DrawingElement = {
    init: function(shapeType,coords,color) {
        this.id = generateUniqueId();
        this.type = shapeType;
        this.fill = color;
        this.x1 = coords.x1;
        this.y1 = coords.y1;
        this.x2 = coords.x2;
        this.y2 = coords.y2;
    },
    deleteObj: drawing.deleteObj,
    moveForward: drawing.moveForward,
    moveBackward: drawing.moveBackward
};

var el = Object.create( DrawingElement );
el.init(
    "line",
    { x1:10, y1:10, x2:50, y2:100 },
    "red"
);