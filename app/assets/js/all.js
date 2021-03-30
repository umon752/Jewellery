const time = 2000;

/* Anime */
anime.timeline({
    loop: true
  })
  .add({
    targets: '.loading__block__img',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 450,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.loading__block__img',
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 450,
    delay: (el, i) => 100 + 30 * i
  });

$(document).ready(function () {
  /* 2 秒後開始執行 */
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