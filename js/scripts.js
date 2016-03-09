console.log('loaded');


$(function() {


  // if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
// window.onmousewheel = document.onmousewheel = wheel;
//
// function wheel(event) {
//     var delta = 0;
//     if (event.wheelDelta) delta = event.wheelDelta / 120;
//     else if (event.detail) delta = -event.detail / 3;
//
//     handle(delta);
//     if (event.preventDefault) event.preventDefault();
//     event.returnValue = false;
// }
//
// function handle(delta) {
//     var time = 1000;
// 	   var distance = 300;
//
//     $('html, body').stop().animate({
//         scrollLeft: $(window).scrollLeft() - (distance * delta)
//     }, time );
//   }
//
//
//   // Control Scroll Speeds
//   $.fn.moveIt = function(){
//   var $window = $(window);
//   var instances = [];
//
//   $(this).each(function(){
//     instances.push(new moveItItem($(this)));
//   });
//
//   window.onscroll = function(){
//     var scrollLeft = $window.scrollLeft();
//     instances.forEach(function(inst){
//       inst.update(scrollLeft);
//     });
//   }
// }
//
// var moveItItem = function(el){
//   this.el = $(el);
//   this.speed = parseInt(this.el.attr('data-scroll-speed'));
//   console.log(this.speed);
// };
//
// moveItItem.prototype.update = function(scrollLeft){
//   var pos = scrollLeft / this.speed;
//   this.el.css('transform', 'translateX(' + -pos + 'px)');
// };

  // Grab divs with scroll attribute set

  // $('[data-scroll-speed]').moveIt();

  // Horizontal Scroll
  //  $("body").mousewheel(function(event, delta) {
  //     this.scrollLeft -= (delta * 30);
  //     console.log(this.scrollLeft);
  //     event.preventDefault();
   //
  //  });

  // Horizontal Scroll
  //  $(window).scroll(function(){
  //    console.log(window.scrollX);
  //  });
  //
  // $("html").niceScroll({
  //   scrollspeed: 10, // scrolling speed
  //   mousescrollstep: 3, // scrolling speed with mouse wheel (pixel)
  // });

  $.ajax({
     url: 'https://sheetsu.com/apis/ad28babf/column/image_url',
     error: function() {
       console.log("error");
     },
     dataType: 'json',
     jsonpCallback: 'callback',
     success: function(data) {
       for (var i = 0; i < data.result.length; i++) {
         var parallax = ".parallax-section-" + ( i + 1 );
         $( parallax ).css( {"background-image": "url(" + data.result[ i ] + ")"} );
       }
     },
     type: 'GET'
  });

  $(window).scroll(function(){
     console.log(window.scrollX);
   });

});
//
// $.ajax('https://sheetsu.com/apis/ad28babf', {
//  success: function( data ) {
//
//  },
//  error: function() {
//     console.log('An error occurred');
//  }
// });
