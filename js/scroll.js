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

  var ua = navigator.userAgent;
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    //ウィンドウの高さを取得する
    var targetY = $(window).height();
    //スクロールをクリックするとウィンドウの高さ分、下にスクロールする
    $('.js-scroll a').on('click',function(){
      $("html, body").stop().animate({scrollTop: targetY}, 750, 'swing');
      return false;
    });
  } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        // タブレット用コード
  } else {
    //ウィンドウの高さを取得する
    var targetY = $(window).height() - 55;
    //スクロールをクリックするとウィンドウの高さ分、下にスクロールする
    $('.js-scroll a').on('click',function(){
      $("html, body").stop().animate({scrollTop: targetY}, 750, 'swing');
      return false;
    });
  }
});

// $(window).on('load resize',function(){
//     //ウィンドウの高さを取得する
//     var targetY = $(window).height();
//     //スクロールをクリックするとウィンドウの高さ分、下にスクロールする
//     $('.js-scroll a').on('click',function(){
//       $("html, body").stop().animate({scrollTop: targetY}, 750, 'swing');
//       return false;
//     });
// });