$(function() {
  $(".slider__inner").slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    fadeSpeed: 5000
  });

  $(function() {
    $(".gallery__items").lightGallery();
    thumbnail: true;
  });
});


var scrollUp = document.getElementById("back-to-top");
window.onscroll = function() {
  if (window.pageYOffset >= 400) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
};

scrollUp.onclick = function() {
  window.scrollTo(0, 0);
};
