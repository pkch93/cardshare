var card = document.querySelector(".card");
card.addEventListener("click", function() {
card.classList.toggle("is-flipped");
});
var cardFace = document.querySelector(".card__face");
var cardImg = document.querySelector(".card__img");
var cardTitle = document.querySelector(".card__title");
cardTitle.style.height = `${cardFace.offsetHeight -
(cardImg.clientHeight +
  parseFloat(getComputedStyle(cardImg).marginBottom) * 1)}px`;