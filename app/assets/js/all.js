$(document).ready(function () {
  $('.introProduct__item__sold').click(function (e) {
      e.preventDefault();
      $('.introProduct__item__sold').toggleClass('animate__shakeX');
  });
});