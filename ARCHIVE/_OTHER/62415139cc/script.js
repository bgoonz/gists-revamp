$(document).ready(function() {
  
  var pen = $('.pen');
  var clicker = $('#clicker');
  var point = $('#point');
  var drop = $('#drop');
  var cover = $('#cover');
  
  pen.click(function() {
    if (pen.hasClass('active')) {
      clicker.animate({width: '10px'}, '100')
        .animate({width: '30px'}, '100');
    
      point.animate({width: '15px'}, '100')
        .animate({width: '0px'}, '100');
    
      $(this).removeClass('active');
    }
    else {
      clicker.animate({width: '10px'}, '100')
        .animate({width: '15px'}, '100');
    
      point.animate({width: '15px'}, '100')
        .animate({width: '10px'}, '100');
    
      $(this).addClass('active');
      
      setTimeout(function() {
        $('h1').fadeOut('slow');
        pen.addClass('move');
      }, 100);
      
      setTimeout(function() {         
        drop.show();
        
        drop.animate({
          width: '20px',
          height: '20px',
          top: '15px'
        }, 500);
      }, 4000);
      
      setTimeout(function() {         
        drop.animate({
          right: '600px',
          width: '200px',
          height: '200px',
          top: '-75px'
        }, 800);
      }, 5000);
      
      setTimeout(function() {         
        $('img').show();
        $('.center').fadeIn('slow');
      }, 6000);
    }
  });


});