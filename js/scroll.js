$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var headerHeight = 55;
    var position = target.offset().top - headerHeight;
    $("html, body").animate({scrollTop:position},  speed, "swing");
    return false;
  });
});

$(document).ready(function (){
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});
