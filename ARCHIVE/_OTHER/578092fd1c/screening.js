// 1: how could you rewrite the following to make it shorter?
if (foo) {
  bar.doSomething(el);
} else {
  bar.doSomethingElse(el);
}



// ------------------------------------
(foo?bar.doSomething:bar.doSomethingElse)(el);




// 2: what is the faulty logic in the following code?
var foo = 'hello';

(function() {
  var foo = foo || 'world';
  console.log(foo);
})();



// ------------------------------------
// the `var foo` local variable declaration will immediately override the local
// function's reference to `foo` (defaulting to `undefined`), and then the
// initialization clause `foo || 'world'` will run, at which point the `foo ||`
// check will always fail since `foo` at that point is `undefined`.
// Either:
// a) use a different variable for local and global variables
// b) reference the global `foo` as `window.foo`




// 3: given the following code, how would you override the value of the bar
// property for the variable foo without affecting the value of the bar
// property for the variable bim? how would you affect the value of the bar
// property for both foo and bim? how would you add a method to foo and bim to
// console.log the value of each object's bar property? how would you tell if
// the object's bar property had been overridden for the particular object?
var Thinger = function() {
  return this;
};

Thinger.prototype = {
  bar : 'baz'
};

var foo = new Thinger(),
    bim = new Thinger();



// ------------------------------------
/*1*/ foo.bar = 'something';
/*2*/ Thinger.prototype.bar = 'else';
/*3*/ Thinger.prototype.log_bar = function() { console.log(this.bar); };
/*4*/ Thinger.prototype.bar_overridden = function() { return this.hasOwnProperty('bar'); };




// 4: given the following code, and assuming that each defined object has a
// 'destroy' method, how would you destroy all of the objects contained in the
// myObjects object?
var myObjects = {
  thinger : new myApp.Thinger(),
  gizmo : new myApp.Gizmo(),
  widget : new myApp.Widget()
};



// ------------------------------------
for (var i in myObjects) { if (myObjects.hasOwnProperty(i)) {
   myObjects[i].destroy();
   myObjects[i] = null; // or `void 0` or `false`, or use `delete myObjects[i]`
}}




// 5: given the following array, create an array that contains the contents of
// each array item repeated three times, with a space between each item. so,
// for example, if an array item is 'foo' then the new array should contain an
// array item 'foo foo foo'. (you can assume the library of your choice is
// available)
var myArray = [ 'foo', 'bar', 'baz' ];



// ------------------------------------
var newArray = myArray.map(function(v){
   return Array(4).join(' '+v).substr(1);
});




// 6: how could you improve the following code?
$(document).ready(function() {
  $('.foo #bar').css('color', 'red');
  $('.foo #bar').css('border', '1px solid blue');
  $('.foo #bar').text('new text!');
  $('.foo #bar').click(function() {
    $(this).attr('title', 'new title');
    $(this).width('100px');
  });
  
  $('.foo #bar').click();
});



// ------------------------------------
$(function(){
  var $obj = $('#bar');
  $obj
    .css({color:'red', border:'1px solid blue'})
    .text('new text!')
    .click(function(){
      $obj
        .attr('title', 'new title')
        .width('100px')
      ;
    })
    .click()
  ;
});



// OR, even better:
// ------------------------------------
#bar.baz { color:red; border:1px solid blue; }
#bar.wee { width:100px; }

$(function(){
  var $obj = $('#bar');
  $obj
    .addClass('baz')
    .text('new text!')
    .click(function(){
      $obj
        .attr('title', 'new title')
        .addClass('wee')
      ;
    })
    .click()
  ;
});




// 7: what issues do you see with the following code? how would you fix it?
(function() {
  var foo;

  dojo.xhrGet({
    url : 'foo.php',
    load : function(resp) {
      foo = resp.foo;
    }
  });

  if (foo) {
    // run this important code
  }
})();



// ------------------------------------
// The problem is that xhrGet is async in this code, which means that the XHR
// will fire off and immediately move to the `if (foo)` check, before the XHR
// has had a chance to finish and come back. So, the check will always fail.

// One solution:
(function() {
  var foo;

  dojo.xhrGet({
    url : 'foo.php',
    load : function(resp) {
      if (foo = resp.foo) {
        // run this important code
      }
    }
  });
})();




// 8: how could you rewrite the following code to make it shorter?
(function(d, $){
  $('li.foo a').attr('title', 'i am foo');
  $('li.bar a').attr('title', 'i am bar');
  $('li.baz a').attr('title', 'i am baz');
  $('li.bop a').attr('title', 'i am bop');
})(dojo, dojo.query);



// ------------------------------------
(function(d, $){
  d.forEach({'foo':1,'bar':1,'baz':1,'bop':1},function(v,i){
    $('li.'+i+' a').attr('title','i am '+i);
  });
})(dojo, dojo.query);



// 9: how would you improve the following code?
for (i = 0; i <= 100; i++) {
  $('#thinger').append('<p><span class="thinger">i am thinger ' + i + '</span></p>');
  $('#gizmo').append('<p><span class="gizmo">i am gizmo ' + i + '</span></p>');
}



// ------------------------------------
var $thinger = $('#thinger'), $thinger_tmp = $("<div></div>"),
    $gizmo = $('#gizmo'), $gizmo_tmp = $("<div></div>")
;
for (i=0; i<=100; i++) {
  $thinger_tmp.append('<p><span class="thinger">i am thinger '+i+'</span></p>');
  $gizmo_tmp.append('<p><span class="gizmo">i am gizmo '+i+'</span></p>');
}
$thinger.append($thinger_tmp.children());
$gizmo.append($gizmo_tmp.children());






// 10: a user enters their desired tip into a text box; the baseTotal, tax,
// and fee values are provided by the application. what are some potential
// issues with the following function for calculating the total?
function calculateTotal(baseTotal, tip, tax, fee) {
  return baseTotal + tip + tax + fee;
}


// ------------------------------------
// 1) tip needs to be converted to numeric with parseFloat()
// 2) tip needs to be validated to not be negative



// 11: given the following data structure, write code that returns an array 
// containing the name of each item, followed by a comma-separated list of
// the item's extras, if it has any. e.g. 
//
//    [ "Salad (Chicken, Steak, Shrimp)", ... ]
//
// (you can assume the library of your choice is available)
var menuItems = [
  {
    id : 1,
    name : 'Salad',
    extras : [
      'Chicken', 'Steak', 'Shrimp'
    ]
  },
  
  {
    id : 2,
    name : 'Potato',
    extras : [
      'Bacon', 'Sour Cream', 'Shrimp'
    ]
  },
  
  {
    id : 3,
    name : 'Sandwich',
    extras : [
      'Turkey', 'Bacon'
    ]
  },
  
  {
    id : 4,
    name : 'Bread'
  }
];



// ------------------------------------
var newMenuItems = [], tmp;
for (var i in menuItems) { if (menuItems.hasOwnProperty(i)) {
  newMenuItems.push(menuItems[i].name+(menuItems[i].extras?" ("+menuItems[i].extras.join(', ')+")":""));
}}




// BONUS: write code such that the following alerts "Hello World"
say('Hello')('World');



// ------------------------------------
function say(first) {
   return function(second){
     alert(first+' '+second);
   };
}





// BONUS: what is the faulty logic in the following code? how would you fix it?
var date = new Date(),
    day = date.getDate(),
    month = date.getMonth(),
    dates = [];
    
for (var i = 0; i <= 5; i++) {
  dates.push(month + '/' + (day + i));
}

console.log('The next five days are ', dates.join(', '));



// ------------------------------------
// 1) getMonth() is 0-based
// 2) the day overflow beyond max number of days in the month is not accounted for
// 3) by starting i at 0, you are going to get today plus the next five days, but the
//    output indicates it's just the next five days, so confusing to the user.
// 4) "l10n" issues of whether day or month is shown first are not accounted for

var date = new Date(),
    dates = []
;

for (var i=1; i<=5; i++) {
  date.setDate(date.getDate()+1);
  dates.push(date.toLocaleString());
}

console.log('The next five days are ', dates.join(', '));



/*
          DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
                   Version 2, December 2004 

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

Everyone is permitted to copy and distribute verbatim or modified 
copies of this license document, and changing it is allowed as long 
as the name is changed. 

           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

 0. You just DO WHAT THE FUCK YOU WANT TO.
*/