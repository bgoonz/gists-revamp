function repeatString(str,count) {
	for (var i=1; i<count; i++) {
		str += str;
	}
	return str;
}

function myToFixed(x,f) {
	// (3):
	f = parseInt(String(f),10);
	// (5):
	if (f < 0 || f > 20) throw new RangeError("Oops");
	// (6):
	if (Number.isNaN(x)) return "NaN";
	// (7):
	var s = "";
	// (8):
	if (x < 0) {
		// (8.a):
		s = "-";
		// (8.b):
		x = -x;
	}
	// (9):
	if (x >= Math.pow(10,21)) {
		// (9.a):
		var m = String(x);
	}	
	else {
		// (10.a):
		// exact float (non-integer) n
		var n = x * Math.pow(10,f);
		// two closest integer candidates for n
		var n1 = Math.ceil(n);
		var n2 = Math.floor(n);
		// which n gets us closest to 0?
		var tmp1 = Math.abs( n1 / Math.pow(10,f) - x );
		var tmp2 = Math.abs( n2 / Math.pow(10,f) - x );
		if (tmp1 < tmp2) n = n1;
		else if (tmp1 > tmp2) n = n2;
		// "If there are two such n, pick the larger n."
		else n = Math.max(n1,n2);
		
		// (10.b):
		if (n == 0) m = "0"
		else m = String(n);
		// (10.c):
		if (f != 0) {
			// (10.c.i):
			var k = m.length;
			// (10.c.ii):
			if (k <= f) {
				// (10.c.ii.1):
				var z = repeatString("0",f+1-k);
				// (10.c.ii.2):
				m = z + m;
				// (10.c.ii.3):
				k = f + 1;
			}
			// (10.c.iii):
			var a = m.substr(0,k-f);
			var b = m.substr(k-f,f);
			// (10.c.iv):
			m = a + "." + b;
		}
	}
	// (11):
	return s + m;
}

myToFixed(859.385,2);	// "859.39"
859.385.toFixed(2);	// "859.38"  :(