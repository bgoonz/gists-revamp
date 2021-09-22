// i understand THAT javascript doesn't assume a `;` before `return` in 
// these examples. but i don't understand WHY it can't? why didn't they
// say that the grammar for `return` always assumes the previous statement
// is complete?

// NOTE: david baron pointed out that `if(a)return;` definitely wouldn't want
// to have this assumption. good point. but the others?

// NOTE: assume all these are inside a function, so `return` is safe.



// illegal

var a=""return;

var a;a=""return;

var a;a={}return;

var a;(a="")return;

var a;[a=""]return;

var a;a=[]return;



// legal

var a;{a=""}return;

if(a){}return;

for(var a=0; a<1; a++){}return;

function a(){}return;

switch(a){}return;
