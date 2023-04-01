"use strict";
$(document).ready(function () {
  $(".product_slider-container").slick({
    infinity: true,
    slidesToShow: 6,
    centerMode: true,
    variableWidth: true,
    prevArrow:
      "<span class='arrows-left'> <</span> <div class='shadow-block-left'></div>",
    nextArrow:
      "<span class='arrows-rigth'>></span> <div class='shadow-block-right'></div>",
  });
});
