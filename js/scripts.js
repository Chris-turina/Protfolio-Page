

$(document).ready(function() {
  $(".menu").click(function() {
    $(".menu").toggleClass("x-active");
    $(".about-me").toggle();
    $(".my-work").toggle();
    $(".contact-page").toggle();

  })
});
