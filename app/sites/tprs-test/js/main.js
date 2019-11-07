$(function() {
 
  $(".header__help-link").click(function() {
    $(".header__help-dropdown").toggleClass("desktop-dropdown");
  });

  $('html').click(function(event) {
    if ($(event.target).closest('.header__help-dropdown, .header__help-link').length === 0) {
        $('.header__help-dropdown').addClass("desktop-dropdown");
    }
 });
});

$(function() {
  $(".header__icon-bars").toggleClass("header__icon-bars-changed");

  $(".header__btn-menu").click(function() {
    $(".header__icon-bars").toggleClass("header__icon-bars-changed");
    $(".header__help-dropdown").toggleClass("mobile-dropdown");
  });

  $('html').click(function(event) {
    if ($(event.target).closest('.header__help-dropdown, .header__icon-bars').length === 0) {
      $(".header__icon-bars").removeClass("header__icon-bars-changed");
      $(".header__help-dropdown").addClass("mobile-dropdown");
    }
 });

});


$(".toggle").click(function(e) {
  e.preventDefault();
  var $this = $(this);

  $this.prev().toggleClass("triangle-open");

  if ($this.next().hasClass("show")) {
    $this.next().removeClass("show");
    $this.next().slideUp(350);
  } else {
    $this
      .parent()
      .parent()
      .find("li .inner")
      .removeClass("show");
    $this
      .parent()
      .parent()
      .find("li .inner")
      .slideUp(350);
    $this.next().toggleClass("show");
    $this.next().slideToggle(350);
  }
});
