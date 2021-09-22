var HID = require('HID');
var util = require('util');
var events = require('events');

var devices = HID.devices();

var device

devices.forEach((function(d) {
  if(typeof d === 'object' && d.product.toLowerCase() === 'controller') {
    
    device = new HID.HID(d.path)
  }
}).bind(this))

var buttons = {
  'dup': {
    'block': 2,
    'bitwise': 0x01
  }, 
  'ddown':{
    'block': 2,
    'bitwise': 0x02
  },
  'dleft':{
    'block': 2,
    'bitwise': 0x04
  },
  'dright':{
    'block': 2,
    'bitwise': 0x08
  },
  'start':{
    'block': 2,
    'bitwise': 0x10
  },
  'back':{
    'block': 2,
    'bitwise': 0x20
  },
  'leftstick':{
    'block': 2,
    'bitwise': 0x40
  },
  'rightstick':{
    'block': 2,
    'bitwise': 0x80
  },
  'leftshoulder':{
    'block': 3,
    'bitwise': 0x1
  },
  'rightshoulder':{
    'block': 3,
    'bitwise': 0x2
  },
  'xboxbutton':{
    'block': 3,
    'bitwise': 0x4
  },
  'a':{
    'block': 3,
    'bitwise': 0x10
  },
  'b':{
    'block': 3,
    'bitwise': 0x20
  },
  'x':{
    'block': 3,
    'bitwise': 0x40
  },
  'y':{
    'block': 3,
    'bitwise': 0x80
  },

  // data[6] => 'left stick x'
  // data[7] => 'left stick x'

  // data[8] => 'left stick y'
  // data[9] => 'left stick y'

  // data[10] => 'right stick x'
  // data[11] => 'right stick x'

  // data[12] => 'right stick y'
  // data[13] => 'right stick y'
}

var triggers = {
  'left':{
    'block': 4
  },
  'right':{
    'block': 5
  }
}

function uint8Toint16(low, high) {
  var buffer = new ArrayBuffer(4);
  var int8View = new Uint8Array(buffer);
  var int16View = new Int16Array(buffer);

  int8View[0] = low;
  int8View[1] = high;
  return int16View[0];
}

function XboxController()
{
    var devices = HID.devices();
    var device
    devices.forEach((function(d) {
      if(typeof d === 'object' && d.product.toLowerCase() === 'controller') {
    
        device = new HID.HID(d.path)
      }
    }).bind(this))
    this.hid = device
    this.position = 0;

    for (var key in buttons) {
      this[key] = 0;
    }
    for (var key in triggers) {
      this[key] = 0;
    }

    this.hid.read(this.interpretData.bind(this));
}

util.inherits(XboxController, events.EventEmitter);

XboxController.prototype.interpretData = function(error, data) {
    for (var key in buttons) {
      var address = buttons[key]
      var state = data[address.block] & address.bitwise

      if(state ^ this[key]){
        this.emit((state ? key+':press': key+':release'), key);
        this[key] = state
      }
    }

    for (var key in triggers) {
      var address = triggers[key]
      var state = data[address.block]
      if(state ^ this[key]){
        this.emit(key+'trigger', state);
        this[key] = state
      }
    }

    console.log('left x:'+uint8Toint16(data[6], data[7]))
    console.log('left y:'+uint8Toint16(data[8], data[9]))

    console.log('right x:'+uint8Toint16(data[10], data[11]))
    console.log('right y:'+uint8Toint16(data[12], data[13]))

    this.hid.read(this.interpretData.bind(this));
}

// -------------

var xbox = new XboxController

for (var key in buttons) {
  xbox.on(key+':press', function (key) {
    console.log(key + ' press');
  });

  xbox.on(key+':release', function (key) {
      console.log(key+' release');
  });
}

xbox.on('lefttrigger', function(position){
  console.log('lefttrigger', position)
})

xbox.on('righttrigger', function(position){
  console.log('righttrigger', position)
})
