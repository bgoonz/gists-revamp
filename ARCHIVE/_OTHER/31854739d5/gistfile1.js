var fs = require("fs");
var jParser = require("jParser");
var eof = false;

fs.readFile("sample.jpg", function (err, data) {
  if (!err) {
    var view = new jDataView(data, undefined, undefined, false);
    var parser = new jParser(view, {
      // JPG
      hex: function () {
        return "0x" + this.parse("uint8").toString(16);
      },
      marker: ["array", "hex", 2],
      variable_length_segment: {
        segment_length: "uint16",
        width: "uint16",
        height: "uint16",
        data: [
          "array",
          "uint8",
          function () {
            return this.current.segment_length - 6;
          },
        ],
      },
      segment: function () {
        var marker = this.parse("marker"),
          segment,
          next_marker;
        // end-of-file?
        if (marker[0] == "0xff" && marker[1] == "0xd9") {
          eof = true;
          return;
        }

        // SOF segments (which should hold dimensions!)
        if (marker[1] == "0xc0" || marker[1] == "0xc2") {
          segment = this.parse("variable_length_segment");
          segment.marker = marker;
          return segment;
        } else {
          do {
            next_marker = this.parse("marker");
          } while (!(next_marker[0] == "0xff" && next_marker[1] != "0x0"));
          this.seek(this.tell() - 2);

          // just return an empty marker segment
          return { marker: marker };
        }
      },
      header: ["array", "hex", 2],
    });

    var header,
      segments = [];
    try {
      header = parser.parse("header");
      do {
        segments.push(parser.parse("segment"));
      } while (!eof);
    } catch (err) {
      console.log(err);
    }

    console.log(JSON.stringify(segments));
  } else console.log(err);
});
