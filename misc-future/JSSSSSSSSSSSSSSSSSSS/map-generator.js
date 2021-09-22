"use strict";

exports.__esModule = true;
exports.default = void 0;

var _sourceMap = _interopRequireDefault(require("source-map"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MapGenerator =
  /*#__PURE__*/
  (function () {
    function MapGenerator(stringify, root, opts) {
      this.stringify = stringify;
      this.mapOpts = opts.map || {};
      this.root = root;
      this.opts = opts;
    }

    var _proto = MapGenerator.prototype;

    _proto.isMap = function isMap() {
      if (typeof this.opts.map !== "undefined") {
        return !!this.opts.map;
      }

      return this.previous().length > 0;
    };

    _proto.previous = function previous() {
      var _this = this;

      if (!this.previousMaps) {
        this.previousMaps = [];
        this.root.walk(function (node) {
          if (node.source && node.source.input.map) {
            var map = node.source.input.map;

            if (_this.previousMaps.indexOf(map) === -1) {
              _this.previousMaps.push(map);
            }
          }
        });
      }

      return this.previousMaps;
    };

    _proto.isInline = function isInline() {
      if (typeof this.mapOpts.inline !== "undefined") {
        return this.mapOpts.inline;
      }

      var annotation = this.mapOpts.annotation;

      if (typeof annotation !== "undefined" && annotation !== true) {
        return false;
      }

      if (this.previous().length) {
        return this.previous().some(function (i) {
          return i.inline;
        });
      }

      return true;
    };

    _proto.isSourcesContent = function isSourcesContent() {
      if (typeof this.mapOpts.sourcesContent !== "undefined") {
        return this.mapOpts.sourcesContent;
      }

      if (this.previous().length) {
        return this.previous().some(function (i) {
          return i.withContent();
        });
      }

      return true;
    };

    _proto.clearAnnotation = function clearAnnotation() {
      if (this.mapOpts.annotation === false) return;
      var node;

      for (var i = this.root.nodes.length - 1; i >= 0; i--) {
        node = this.root.nodes[i];
        if (node.type !== "comment") continue;

        if (node.text.indexOf("# sourceMappingURL=") === 0) {
          this.root.removeChild(i);
        }
      }
    };

    _proto.setSourcesContent = function setSourcesContent() {
      var _this2 = this;

      var already = {};
      this.root.walk(function (node) {
        if (node.source) {
          var from = node.source.input.from;

          if (from && !already[from]) {
            already[from] = true;

            var relative = _this2.relative(from);

            _this2.map.setSourceContent(relative, node.source.input.css);
          }
        }
      });
    };

    _proto.applyPrevMaps = function applyPrevMaps() {
      for (
        var _iterator = this.previous(),
          _isArray = Array.isArray(_iterator),
          _i = 0,
          _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();
        ;

      ) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var prev = _ref;
        var from = this.relative(prev.file);

        var root = prev.root || _path.default.dirname(prev.file);

        var map = void 0;

        if (this.mapOpts.sourcesContent === false) {
          map = new _sourceMap.default.SourceMapConsumer(prev.text);

          if (map.sourcesContent) {
            map.sourcesContent = map.sourcesContent.map(function () {
              return null;
            });
          }
        } else {
          map = prev.consumer();
        }

        this.map.applySourceMap(map, from, this.relative(root));
      }
    };

    _proto.isAnnotation = function isAnnotation() {
      if (this.isInline()) {
        return true;
      }

      if (typeof this.mapOpts.annotation !== "undefined") {
        return this.mapOpts.annotation;
      }

      if (this.previous().length) {
        return this.previous().some(function (i) {
          return i.annotation;
        });
      }

      return true;
    };

    _proto.toBase64 = function toBase64(str) {
      if (Buffer) {
        return Buffer.from(str).toString("base64");
      }

      return window.btoa(unescape(encodeURIComponent(str)));
    };

    _proto.addAnnotation = function addAnnotation() {
      var content;

      if (this.isInline()) {
        content =
          "data:application/json;base64," + this.toBase64(this.map.toString());
      } else if (typeof this.mapOpts.annotation === "string") {
        content = this.mapOpts.annotation;
      } else {
        content = this.outputFile() + ".map";
      }

      var eol = "\n";
      if (this.css.indexOf("\r\n") !== -1) eol = "\r\n";
      this.css += eol + "/*# sourceMappingURL=" + content + " */";
    };

    _proto.outputFile = function outputFile() {
      if (this.opts.to) {
        return this.relative(this.opts.to);
      }

      if (this.opts.from) {
        return this.relative(this.opts.from);
      }

      return "to.css";
    };

    _proto.generateMap = function generateMap() {
      this.generateString();
      if (this.isSourcesContent()) this.setSourcesContent();
      if (this.previous().length > 0) this.applyPrevMaps();
      if (this.isAnnotation()) this.addAnnotation();

      if (this.isInline()) {
        return [this.css];
      }

      return [this.css, this.map];
    };

    _proto.relative = function relative(file) {
      if (file.indexOf("<") === 0) return file;
      if (/^\w+:\/\//.test(file)) return file;
      var from = this.opts.to ? _path.default.dirname(this.opts.to) : ".";

      if (typeof this.mapOpts.annotation === "string") {
        from = _path.default.dirname(
          _path.default.resolve(from, this.mapOpts.annotation)
        );
      }

      file = _path.default.relative(from, file);

      if (_path.default.sep === "\\") {
        return file.replace(/\\/g, "/");
      }

      return file;
    };

    _proto.sourcePath = function sourcePath(node) {
      if (this.mapOpts.from) {
        return this.mapOpts.from;
      }

      return this.relative(node.source.input.from);
    };

    _proto.generateString = function generateString() {
      var _this3 = this;

      this.css = "";
      this.map = new _sourceMap.default.SourceMapGenerator({
        file: this.outputFile(),
      });
      var line = 1;
      var column = 1;
      var lines, last;
      this.stringify(this.root, function (str, node, type) {
        _this3.css += str;

        if (node && type !== "end") {
          if (node.source && node.source.start) {
            _this3.map.addMapping({
              source: _this3.sourcePath(node),
              generated: {
                line: line,
                column: column - 1,
              },
              original: {
                line: node.source.start.line,
                column: node.source.start.column - 1,
              },
            });
          } else {
            _this3.map.addMapping({
              source: "<no source>",
              original: {
                line: 1,
                column: 0,
              },
              generated: {
                line: line,
                column: column - 1,
              },
            });
          }
        }

        lines = str.match(/\n/g);

        if (lines) {
          line += lines.length;
          last = str.lastIndexOf("\n");
          column = str.length - last;
        } else {
          column += str.length;
        }

        if (node && type !== "start") {
          var p = node.parent || {
            raws: {},
          };

          if (node.type !== "decl" || node !== p.last || p.raws.semicolon) {
            if (node.source && node.source.end) {
              _this3.map.addMapping({
                source: _this3.sourcePath(node),
                generated: {
                  line: line,
                  column: column - 2,
                },
                original: {
                  line: node.source.end.line,
                  column: node.source.end.column - 1,
                },
              });
            } else {
              _this3.map.addMapping({
                source: "<no source>",
                original: {
                  line: 1,
                  column: 0,
                },
                generated: {
                  line: line,
                  column: column - 1,
                },
              });
            }
          }
        }
      });
    };

    _proto.generate = function generate() {
      this.clearAnnotation();

      if (this.isMap()) {
        return this.generateMap();
      }

      var result = "";
      this.stringify(this.root, function (i) {
        result += i;
      });
      return [result];
    };

    return MapGenerator;
  })();

var _default = MapGenerator;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC1nZW5lcmF0b3IuZXM2Il0sIm5hbWVzIjpbIk1hcEdlbmVyYXRvciIsInN0cmluZ2lmeSIsInJvb3QiLCJvcHRzIiwibWFwT3B0cyIsIm1hcCIsImlzTWFwIiwicHJldmlvdXMiLCJsZW5ndGgiLCJwcmV2aW91c01hcHMiLCJ3YWxrIiwibm9kZSIsInNvdXJjZSIsImlucHV0IiwiaW5kZXhPZiIsInB1c2giLCJpc0lubGluZSIsImlubGluZSIsImFubm90YXRpb24iLCJzb21lIiwiaSIsImlzU291cmNlc0NvbnRlbnQiLCJzb3VyY2VzQ29udGVudCIsIndpdGhDb250ZW50IiwiY2xlYXJBbm5vdGF0aW9uIiwibm9kZXMiLCJ0eXBlIiwidGV4dCIsInJlbW92ZUNoaWxkIiwic2V0U291cmNlc0NvbnRlbnQiLCJhbHJlYWR5IiwiZnJvbSIsInJlbGF0aXZlIiwic2V0U291cmNlQ29udGVudCIsImNzcyIsImFwcGx5UHJldk1hcHMiLCJwcmV2IiwiZmlsZSIsInBhdGgiLCJkaXJuYW1lIiwibW96aWxsYSIsIlNvdXJjZU1hcENvbnN1bWVyIiwiY29uc3VtZXIiLCJhcHBseVNvdXJjZU1hcCIsImlzQW5ub3RhdGlvbiIsInRvQmFzZTY0Iiwic3RyIiwiQnVmZmVyIiwidG9TdHJpbmciLCJ3aW5kb3ciLCJidG9hIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJhZGRBbm5vdGF0aW9uIiwiY29udGVudCIsIm91dHB1dEZpbGUiLCJlb2wiLCJ0byIsImdlbmVyYXRlTWFwIiwiZ2VuZXJhdGVTdHJpbmciLCJ0ZXN0IiwicmVzb2x2ZSIsInNlcCIsInJlcGxhY2UiLCJzb3VyY2VQYXRoIiwiU291cmNlTWFwR2VuZXJhdG9yIiwibGluZSIsImNvbHVtbiIsImxpbmVzIiwibGFzdCIsInN0YXJ0IiwiYWRkTWFwcGluZyIsImdlbmVyYXRlZCIsIm9yaWdpbmFsIiwibWF0Y2giLCJsYXN0SW5kZXhPZiIsInAiLCJwYXJlbnQiLCJyYXdzIiwic2VtaWNv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QVFDLGdCQUFBQSxNQUFNLEVBQUVBLE1BQU0sR0FBRztBQUF6QjtBQUhPLGFBQXBCO0FBS0Q7QUFDRjtBQUNGO0FBQ0YsS0FwREQ7QUFxREQsRzs7U0FFRGMsUSxHQUFBLG9CQUFZO0FBQ1YsU0FBS3pELGVBQUw7O0FBRUEsUUFBSSxLQUFLbEIsS0FBTCxFQUFKLEVBQWtCO0FBQ2hCLGFBQU8sS0FBS29ELFdBQUwsRUFBUDtBQUNEOztBQUVELFFBQUl3QixNQUFNLEdBQUcsRUFBYjtBQUNBLFNBQUtqRixTQUFMLENBQWUsS0FBS0MsSUFBcEIsRUFBMEIsVUFBQWtCLENBQUMsRUFBSTtBQUM3QjhELE1BQUFBLE1BQU0sSUFBSTlELENBQVY7QUFDRCxLQUZEO0FBR0EsV0FBTyxDQUFDOEQsTUFBRCxDQUFQO0FBQ0QsRzs7Ozs7ZUFHWWxGLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW96aWxsYSBmcm9tICdzb3VyY2UtbWFwJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuY2xhc3MgTWFwR2VuZXJhdG9yIHtcbiAgY29uc3RydWN0b3IgKHN0cmluZ2lmeSwgcm9vdCwgb3B0cykge1xuICAgIHRoaXMuc3RyaW5naWZ5ID0gc3RyaW5naWZ5XG4gICAgdGhpcy5tYXBPcHRzID0gb3B0cy5tYXAgfHwgeyB9XG4gICAgdGhpcy5yb290ID0gcm9vdFxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgfVxuXG4gIGlzTWFwICgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMub3B0cy5tYXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gISF0aGlzLm9wdHMubWFwXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCkubGVuZ3RoID4gMFxuICB9XG5cbiAgcHJldmlvdXMgKCkge1xuICAgIGlmICghdGhpcy5wcmV2aW91c01hcHMpIHtcbiAgICAgIHRoaXMucHJldmlvdXNNYXBzID0gW11cbiAgICAgIHRoaXMucm9vdC53YWxrKG5vZGUgPT4ge1xuICAgICAgICBpZiAobm9kZS5zb3VyY2UgJiYgbm9kZS5zb3VyY2UuaW5wdXQubWFwKSB7XG4gICAgICAgICAgbGV0IG1hcCA9IG5vZGUuc291cmNlLmlucHV0Lm1hcFxuICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzTWFwcy5pbmRleE9mKG1hcCkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzTWFwcy5wdXNoKG1hcClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXNNYXBzXG4gIH1cblxuICBpc0lubGluZSAoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm1hcE9wdHMuaW5saW5lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRoaXMubWFwT3B0cy5pbmxpbmVcbiAgICB9XG5cbiAgICBsZXQgYW5ub3RhdGlvbiA9IHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uXG4gICAgaWYgKHR5cGVvZiBhbm5vdGF0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBhbm5vdGF0aW9uICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcmV2aW91cygpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXMoKS5zb21lKGkgPT4gaS5pbmxpbmUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpc1NvdXJjZXNDb250ZW50ICgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMubWFwT3B0cy5zb3VyY2VzQ29udGVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcE9wdHMuc291cmNlc0NvbnRlbnRcbiAgICB9XG4gICAgaWYgKHRoaXMucHJldmlvdXMoKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCkuc29tZShpID0+IGkud2l0aENvbnRlbnQoKSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNsZWFyQW5ub3RhdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uID09PSBmYWxzZSkgcmV0dXJuXG5cbiAgICBsZXQgbm9kZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLnJvb3Qubm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIG5vZGUgPSB0aGlzLnJvb3Qubm9kZXNbaV1cbiAgICAgIGlmIChub2RlLnR5cGUgIT09ICdjb21tZW50JykgY29udGludWVcbiAgICAgIGlmIChub2RlLnRleHQuaW5kZXhPZignIyBzb3VyY2VNYXBwaW5nVVJMPScpID09PSAwKSB7XG4gICAgICAgIHRoaXMucm9vdC5yZW1vdmVDaGlsZChpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFNvdXJjZXNDb250ZW50ICgpIHtcbiAgICBsZXQgYWxyZWFkeSA9IHsgfVxuICAgIHRoaXMucm9vdC53YWxrKG5vZGUgPT4ge1xuICAgICAgaWYgKG5vZGUuc291cmNlKSB7XG4gICAgICAgIGxldCBmcm9tID0gbm9kZS5zb3VyY2UuaW5wdXQuZnJvbVxuICAgICAgICBpZiAoZnJvbSAmJiAhYWxyZWFkeVtmcm9tXSkge1xuICAgICAgICAgIGFscmVhZHlbZnJvbV0gPSB0cnVlXG4gICAgICAgICAgbGV0IHJlbGF0aXZlID0gdGhpcy5yZWxhdGl2ZShmcm9tKVxuICAgICAgICAgIHRoaXMubWFwLnNldFNvdXJjZUNvbnRlbnQocmVsYXRpdmUsIG5vZGUuc291cmNlLmlucHV0LmNzcylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhcHBseVByZXZNYXBzICgpIHtcbiAgICBmb3IgKGxldCBwcmV2IG9mIHRoaXMucHJldmlvdXMoKSkge1xuICAgICAgbGV0IGZyb20gPSB0aGlzLnJlbGF0aXZlKHByZXYuZmlsZSlcbiAgICAgIGxldCByb290ID0gcHJldi5yb290IHx8IHBhdGguZGlybmFtZShwcmV2LmZpbGUpXG4gICAgICBsZXQgbWFwXG5cbiAgICAgIGlmICh0aGlzLm1hcE9wdHMuc291cmNlc0NvbnRlbnQgPT09IGZhbHNlKSB7XG4gICAgICAgIG1hcCA9IG5ldyBtb3ppbGxhLlNvdXJjZU1hcENvbnN1bWVyKHByZXYudGV4dClcbiAgICAgICAgaWYgKG1hcC5zb3VyY2VzQ29udGVudCkge1xuICAgICAgICAgIG1hcC5zb3VyY2VzQ29udGVudCA9IG1hcC5zb3VyY2VzQ29udGVudC5tYXAoKCkgPT4gbnVsbClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFwID0gcHJldi5jb25zdW1lcigpXG4gICAgICB9XG5cbiAgICAgIHRoaXMubWFwLmFwcGx5U291cmNlTWFwKG1hcCwgZnJvbSwgdGhpcy5yZWxhdGl2ZShyb290KSlcbiAgICB9XG4gIH1cblxuICBpc0Fubm90YXRpb24gKCkge1xuICAgIGlmICh0aGlzLmlzSW5saW5lKCkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5tYXBPcHRzLmFubm90YXRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXBPcHRzLmFubm90YXRpb25cbiAgICB9XG4gICAgaWYgKHRoaXMucHJldmlvdXMoKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCkuc29tZShpID0+IGkuYW5ub3RhdGlvbilcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHRvQmFzZTY0IChzdHIpIHtcbiAgICBpZiAoQnVmZmVyKSB7XG4gICAgICByZXR1cm4gQnVmZmVyLmZyb20oc3RyKS50b1N0cmluZygnYmFzZTY0JylcbiAgICB9XG4gICAgcmV0dXJuIHdpbmRvdy5idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKSlcbiAgfVxuXG4gIGFkZEFubm90YXRpb24gKCkge1xuICAgIGxldCBjb250ZW50XG5cbiAgICBpZiAodGhpcy5pc0lubGluZSgpKSB7XG4gICAgICBjb250ZW50ID0gJ2RhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArXG4gICAgICAgICAgICAgICAgdGhpcy50b0Jhc2U2NCh0aGlzLm1hcC50b1N0cmluZygpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLm91dHB1dEZpbGUoKSArICcubWFwJ1xuICAgIH1cblxuICAgIGxldCBlb2wgPSAnXFxuJ1xuICAgIGlmICh0aGlzLmNzcy5pbmRleE9mKCdcXHJcXG4nKSAhPT0gLTEpIGVvbCA9ICdcXHJcXG4nXG5cbiAgICB0aGlzLmNzcyArPSBlb2wgKyAnLyojIHNvdXJjZU1hcHBpbmdVUkw9JyArIGNvbnRlbnQgKyAnICovJ1xuICB9XG5cbiAgb3V0cHV0RmlsZSAoKSB7XG4gICAgaWYgKHRoaXMub3B0cy50bykge1xuICAgICAgcmV0dXJuIHRoaXMucmVsYXRpdmUodGhpcy5vcHRzLnRvKVxuICAgIH1cbiAgICBpZiAodGhpcy5vcHRzLmZyb20pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbGF0aXZlKHRoaXMub3B0cy5mcm9tKVxuICAgIH1cbiAgICByZXR1cm4gJ3RvLmNzcydcbiAgfVxuXG4gIGdlbmVyYXRlTWFwICgpIHtcbiAgICB0aGlzLmdlbmVyYXRlU3RyaW5nKClcbiAgICBpZiAodGhpcy5pc1NvdXJjZXNDb250ZW50KCkpIHRoaXMuc2V0U291cmNlc0NvbnRlbnQoKVxuICAgIGlmICh0aGlzLnByZXZpb3VzKCkubGVuZ3RoID4gMCkgdGhpcy5hcHBseVByZXZNYXBzKClcbiAgICBpZiAodGhpcy5pc0Fubm90YXRpb24oKSkgdGhpcy5hZGRBbm5vdGF0aW9uKClcblxuICAgIGlmICh0aGlzLmlzSW5saW5lKCkpIHtcbiAgICAgIHJldHVybiBbdGhpcy5jc3NdXG4gICAgfVxuICAgIHJldHVybiBbdGhpcy5jc3MsIHRoaXMubWFwXVxuICB9XG5cbiAgcmVsYXRpdmUgKGZpbGUpIHtcbiAgICBpZiAoZmlsZS5pbmRleE9mKCc8JykgPT09IDApIHJldHVybiBmaWxlXG4gICAgaWYgKC9eXFx3KzpcXC9cXC8vLnRlc3QoZmlsZSkpIHJldHVybiBmaWxlXG5cbiAgICBsZXQgZnJvbSA9IHRoaXMub3B0cy50byA/IHBhdGguZGlybmFtZSh0aGlzLm9wdHMudG8pIDogJy4nXG5cbiAgICBpZiAodHlwZW9mIHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgZnJvbSA9IHBhdGguZGlybmFtZShwYXRoLnJlc29sdmUoZnJvbSwgdGhpcy5tYXBPcHRzLmFubm90YXRpb24pKVxuICAgIH1cblxuICAgIGZpbGUgPSBwYXRoLnJlbGF0aXZlKGZyb20sIGZpbGUpXG4gICAgaWYgKHBhdGguc2VwID09PSAnXFxcXCcpIHtcbiAgICAgIHJldHVybiBmaWxlLnJlcGxhY2UoL1xcXFwvZywgJy8nKVxuICAgIH1cbiAgICByZXR1cm4gZmlsZVxuICB9XG5cbiAgc291cmNlUGF0aCAobm9kZSkge1xuICAgIGlmICh0aGlzLm1hcE9wdHMuZnJvbSkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwT3B0cy5mcm9tXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbGF0aXZlKG5vZGUuc291cmNlLmlucHV0LmZyb20pXG4gIH1cblxuICBnZW5lcmF0ZVN0cmluZyAoKSB7XG4gICAgdGhpcy5jc3MgPSAnJ1xuICAgIHRoaXMubWFwID0gbmV3IG1vemlsbGEuU291cmNlTWFwR2VuZXJhdG9yKHsgZmlsZTogdGhpcy5vdXRwdXRGaWxlKCkgfSlcblxuICAgIGxldCBsaW5lID0gMVxuICAgIGxldCBjb2x1bW4gPSAxXG5cbiAgICBsZXQgbGluZXMsIGxhc3RcbiAgICB0aGlzLnN0cmluZ2lmeSh0aGlzLnJvb3QsIChzdHIsIG5vZGUsIHR5cGUpID0+IHtcbiAgICAgIHRoaXMuY3NzICs9IHN0clxuXG4gICAgICBpZiAobm9kZSAmJiB0eXBlICE9PSAnZW5kJykge1xuICAgICAgICBpZiAobm9kZS5zb3VyY2UgJiYgbm9kZS5zb3VyY2Uuc3RhcnQpIHtcbiAgICAgICAgICB0aGlzLm1hcC5hZGRNYXBwaW5nKHtcbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2VQYXRoKG5vZGUpLFxuICAgICAgICAgICAgZ2VuZXJhdGVkOiB7IGxpbmUsIGNvbHVtbjogY29sdW1uIC0gMSB9LFxuICAgICAgICAgICAgb3JpZ2luYWw6IHtcbiAgICAgICAgICAgICAgbGluZTogbm9kZS5zb3VyY2Uuc3RhcnQubGluZSxcbiAgICAgICAgICAgICAgY29sdW1uOiBub2RlLnNvdXJjZS5zdGFydC5jb2x1bW4gLSAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1hcC5hZGRNYXBwaW5nKHtcbiAgICAgICAgICAgIHNvdXJjZTogJzxubyBzb3VyY2U+JyxcbiAgICAgICAgICAgIG9yaWdpbmFsOiB7IGxpbmU6IDEsIGNvbHVtbjogMCB9LFxuICAgICAgICAgICAgZ2VuZXJhdGVkOiB7IGxpbmUsIGNvbHVtbjogY29sdW1uIC0gMSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaW5lcyA9IHN0ci5tYXRjaCgvXFxuL2cpXG4gICAgICBpZiAobGluZXMpIHtcbiAgICAgICAgbGluZSArPSBsaW5lcy5sZW5ndGhcbiAgICAgICAgbGFzdCA9IHN0ci5sYXN0SW5kZXhPZignXFxuJylcbiAgICAgICAgY29sdW1uID0gc3RyLmxlbmd0aCAtIGxhc3RcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbiArPSBzdHIubGVuZ3RoXG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlICYmIHR5cGUgIT09ICdzdGFydCcpIHtcbiAgICAgICAgbGV0IHAgPSBub2RlLnBhcmVudCB8fCB7IHJhd3M6IHsgfSB9XG4gICAgICAgIGlmIChub2RlLnR5cGUgIT09ICdkZWNsJyB8fCBub2RlICE9PSBwLmxhc3QgfHwgcC5yYXdzLnNlbWljb2xvbikge1xuICAgICAgICAgIGlmIChub2RlLnNvdXJjZSAmJiBub2RlLnNvdXJjZS5lbmQpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZE1hcHBpbmcoe1xuICAgICAgICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlUGF0aChub2RlKSxcbiAgICAgICAgICAgICAgZ2VuZXJhdGVkOiB7IGxpbmUsIGNvbHVtbjogY29sdW1uIC0gMiB9LFxuICAgICAgICAgICAgICBvcmlnaW5hbDoge1xuICAgICAgICAgICAgICAgIGxpbmU6IG5vZGUuc291cmNlLmVuZC5saW5lLFxuICAgICAgICAgICAgICAgIGNvbHVtbjogbm9kZS5zb3VyY2UuZW5kLmNvbHVtbiAtIDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTWFwcGluZyh7XG4gICAgICAgICAgICAgIHNvdXJjZTogJzxubyBzb3VyY2U+JyxcbiAgICAgICAgICAgICAgb3JpZ2luYWw6IHsgbGluZTogMSwgY29sdW1uOiAwIH0sXG4gICAgICAgICAgICAgIGdlbmVyYXRlZDogeyBsaW5lLCBjb2x1bW46IGNvbHVtbiAtIDEgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZ2VuZXJhdGUgKCkge1xuICAgIHRoaXMuY2xlYXJBbm5vdGF0aW9uKClcblxuICAgIGlmICh0aGlzLmlzTWFwKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlTWFwKClcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gJydcbiAgICB0aGlzLnN0cmluZ2lmeSh0aGlzLnJvb3QsIGkgPT4ge1xuICAgICAgcmVzdWx0ICs9IGlcbiAgICB9KVxuICAgIHJldHVybiBbcmVzdWx0XVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcEdlbmVyYXRvclxuIl0sImZpbGUiOiJtYXAtZ2VuZXJhdG9yLmpzIn0=