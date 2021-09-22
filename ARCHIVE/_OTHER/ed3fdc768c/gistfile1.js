// for..const

var x = [];

// for (const i=0; i<5; i++) {
// 	x.push(function(){return i});
// }

{
	// **** loop init ****
	let $$42 = 0;
	// *******************

	while (true) {
		// **** loop init ****
		const i = $$42;
		// *******************
		
		// **** loop continuation ****
		if (!(i<5)) break;
		// ***************************
		
		// **** loop body ****
		x.push(function(){return i});
		// *******************
				
		// **** loop update ****		
		$$42++;
		// *********************
	}
}

x[3](); // 3