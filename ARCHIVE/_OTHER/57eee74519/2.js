// in node:
var crypto = require("crypto");

async function generatePBKDF2(password) {
	var pwSalt = "SumYxGzTe3lMtfteF+l00yEF7IQuzL/ARHnJp4hCHDAfO9p1aB";
  
	return (await crypto.pbkdf2(password,pwSalt,250000,64,"sha512")).toString("base64");
}

generatePBKDF2("-- my password here --")
.then(console.log);
// UJ3XzqSfs1IjU3/1USt8jPb9Z9jnhevBy3TPCAPGzHPbwXI0jVk+0LoVO7zYmb1BVEtajPmkcuLUPpwju+x+IQ==



// *********************************************************



// in browser:
async function generatePBKDF2(password) {
  var pwSalt = "SumYxGzTe3lMtfteF+l00yEF7IQuzL/ARHnJp4hCHDAfO9p1aB";
  
	var encoder = new TextEncoder();
	var keyMaterial = await crypto.subtle.importKey(
		"raw",
		encoder.encode(password),
		"PBKDF2",
		false,
		["deriveBits","deriveKey",],
	);
	var key = await crypto.subtle.deriveKey(
		{
			"name": "PBKDF2",
			salt: encoder.encode(pwSalt),
			"iterations": 250000,
			"hash": "SHA-512",
		},
		keyMaterial,
		{ "name": "AES-GCM", "length": 256, },
		true,
		[ "encrypt", "decrypt" ]
	);
	return (
		(await crypto.subtle.exportKey("jwk",key)).k
	);
}

generatePBKDF2("-- my password here --")
.then(console.log);
// UJ3XzqSfs1IjU3_1USt8jPb9Z9jnhevBy3TPCAPGzHM