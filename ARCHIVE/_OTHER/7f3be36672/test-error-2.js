function foo() {
	throw new Error("...from foo");
}

function bar() {
	doesntexist1();
}

document.getElementById("clickme").addEventListener("click",bar,false);

setTimeout(function(){
	throw new Error("...from settimeout");
},1000);

dispatchErrorEvent(new Error("...from dispatched event"));
