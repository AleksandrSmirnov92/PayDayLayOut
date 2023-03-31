"use strict";

$(document).ready(function () {
  $(".product-container2").slick({
    infinity: true,
    slidesToShow: 7,
    variableWidth: true,
    prevArrow: "<span class='arrows-left'> <</span> <div class='shadow-block-left'></div>",
    nextArrow: "<span class='arrows-rigth'>></span> <div class='shadow-block-right'></div>"
  });
});