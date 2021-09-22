// child.js

var self = this;

addEventListener("message",function(evt){
	console.log("from child.js:",evt.data);

	// here `self.` is optional
	self.postMessage(evt.data.toUpperCase());
});