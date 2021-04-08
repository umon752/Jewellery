const time = 2000;

/* Anime */
let animation = anime.timeline({
    loop: true
  })
  .add({
    targets: '.js-loading-block-img',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 450,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.js-loading-block-img',
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 450,
    delay: (el, i) => 100 + 30 * i
  });

$(document).ready(function () {
  /* 2 秒後開始執行 */
  setTimeout(function () {
    // loading 畫面消失
    $('.js-loading').addClass('loading--fadeOut');
    // Anime 停止
    animation.pause();

    /* AOS */
    AOS.init({
      duration: 500,
      once: true
    });

    /* Animate.css */
    $('.js-introProduct-item-sold').click(function (e) {
      e.preventDefault();
      $('.js-introProduct-item-sold').toggleClass('animate__shakeX');
    });
  }, time);

});