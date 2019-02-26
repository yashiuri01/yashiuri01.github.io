$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 750;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var headerHeight = 55;
    var position = target.offset().top - headerHeight;
    $("html, body").animate({scrollTop:position},  speed, "swing");
    return false;
  });

  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

$(window).on('load resize',function(){
  //ウィンドウの高さを取得する
  var targetY = $(window).height() - 55;
  //スクロールをクリックするとウィンドウの高さ分、下にスクロールする
  $('.js-scroll a').on('click',function(){
    $("html, body").stop().animate({scrollTop: targetY}, 750, 'swing');
    return false;
  });
});