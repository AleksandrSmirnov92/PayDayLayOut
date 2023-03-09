"use strict";
// const productContainer = document.querySelectorAll(".product_container");
// const card = document.querySelector(".card");
// const arrowLeft = document.querySelector(".arrows-left");
// const arrowRight = document.querySelector(".arrows-rigth");
// let mProducts = [...productContainer];

// arrowLeft.addEventListener("click", () => {
//   console.log("arrowLeft");

//   slider("Left");
// });
// arrowRight.addEventListener("click", () => {
//   slider("Right");
// });
// let slider = (arrow) => {
//   mProducts.forEach((item) => {
//     let cardWidth = Math.round(card.getBoundingClientRect().width);

//     if (arrow === "Right") {
//       item.scrollLeft += cardWidth + 20;
//       console.log(item.scrollLeft);
//     }
//     if (arrow === "Left") {
//       item.scrollLeft -= cardWidth + 20;
//       console.log(item.scrollLeft);
//     }
//   });
// };

$(document).ready(function () {
  $(".p").slick({ infinity: true, slidesToShow: 7, variableWidth: true });
});
