// note: uses the native "mozDash" or "webkitLineDash" functionality if present, polyfills with manual dashed-lines drawing

// note #2: this polyfill does *not* currently work with arcs, bezier-curves, and quadratic-curves. that functionality would be theoretically possible, but is probably very hard to implement.

// note #3: it also doesn't work with rect() or strokeRect() yet, though those should be relatively straightforward to do, by manually drawing the lines using lineTo().

(function(){
	var _moveTo = CanvasRenderingContext2D.prototype.moveTo,
		_lineTo = CanvasRenderingContext2D.prototype.lineTo,
		pos = {
			x: 0,
			y: 0
		}
	;

	CanvasRenderingContext2D.prototype.moveTo = function(x,y) {
		_moveTo.call(this,x,y);
		pos.x = x;
		pos.y = y;
	};

	CanvasRenderingContext2D.prototype.lineTo = function(x,y) {
		// adapted from: http://stackoverflow.com/a/4663129
		if ("_lineDash" in this && this._lineDash) {
			_moveTo.call(this,pos.x,pos.y);
			this.save();
			var _x = pos.x;
			var _y = pos.y;
			var dx = (x-_x), dy = (y-_y);
			var len = Math.sqrt(dx*dx + dy*dy);
			var rot = Math.atan2(dy,dx);
			this.translate(_x,_y);
			_moveTo.call(this,0,0);
			this.rotate(rot);       
			var dc = this._lineDash.length;
			var di = 0, draw = true;
			_x = 0;
			while (len > _x) {
				_x += this._lineDash[di++ % dc];
				if (_x > len) _x = len;
				draw ? _lineTo.call(this,_x,0) : _moveTo.call(this,_x,0);
				draw = !draw;
			}
			this.restore();
			this.moveTo(x,y);
		}
		else {
			_lineTo.call(this,x,y);
			pos.x = x;
			pos.y = y;
		}
	};
})();