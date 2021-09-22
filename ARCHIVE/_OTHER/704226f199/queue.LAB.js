/*! LAB.js v1.2.0 (c) Kyle Simpson MIT License */
/*  INCLUDE THE MINIFIED LAB.js CODE HERE */


// add some boilerplate "queue" behavior for use with LABjs
$LAB._queue = [];
$LAB.queue = function() {
   Array.prototype.push.apply($LAB._queue,arguments);
   return this;
};
$LAB.executeQueue = function() {
   var $L = $LAB;
   for (var i=0, len=$LAB._queue.length; i<len; i++) {
      if (typeof $LAB._queue[0] == "string") {
         $L = $L.script($LAB._queue[0]);
      }
      else if ($LAB._queue[0] === false) {
         $L = $L.wait();
      }
      else {
         $L = $L.wait($LAB._queue[0]);
      }
      $LAB._queue.shift(); // remove first element from the _queue
   }
   $LAB._queue = [];
};