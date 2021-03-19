let time = 1800;

$(document).ready(function () {
  /* 1 秒後開始執行 */
  setTimeout(function () {
    // 設定 loading 畫面消失
    $('.loading').addClass('loading--fadeOut');


    /* AOS */
    AOS.init({
      duration: 500,
      once: true
    });

    /* Animate.css */
    $('.introProduct__item__sold').click(function (e) {
      e.preventDefault();
      $('.introProduct__item__sold').toggleClass('animate__shakeX');
    });
  }, time);

});