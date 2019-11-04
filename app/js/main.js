$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

$(window).on("hashchange", function(e) {
  history.replaceState("", document.title, e.originalEvent.oldURL);
});

$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
      $(".scrollbtn").css("display", "block");
    } else {
      $(".scrollbtn").css("display", "none");
    }
  });
});

$(function() {
  $(".header__mobile-btn").on("click", function() {
    $(".header__contacts").toggle();
    $(".header__menu").toggle();
  })
});
