const loading = document.querySelector('.js-loading');



// Anime Loading 動畫
let animation = anime.timeline({
    loop: true
  })
  .add({
    targets: '.js-loading-block-img',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 450,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.js-loading-block-img',
    translateX: [0, -30],
    opacity: [1, 0],
    easing: 'easeInExpo',
    duration: 450,
    delay: (el, i) => 100 + 30 * i
  });



window.onload = function () {

  // Loading 畫面消失
  loading.classList.add('loading--fadeOut');

  // Anime 停止
  animation.pause();

  // 載入 AOS
  AOS.init({
    duration: 500,
    once: true
  });

};



// 只在 index 時執行
if (window.location.pathname === '/Jewellery/' || window.location.pathname === '/' || window.location.pathname.match('index')) {
  const introProductSold = document.querySelector('.js-introProduct-item-sold');
  // Animate.css 
  function animateClass(e) {
    e.preventDefault();
    introProductSold.classList.add('animate__shakeX');
    setTimeout(function () {
      introProductSold.classList.remove('animate__shakeX');
    }, 1000);
  }

  introProductSold.addEventListener('click', animateClass);
}