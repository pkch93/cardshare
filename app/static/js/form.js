// form to card
function inputToCard() {
  document.querySelector(
    ".card__title"
  ).textContent = document.getElementsByName("title")[0].value;
  document.querySelector(".card__from").textContent = `From. ${
    document.getElementsByName("from")[0].value
  }`;
  document.querySelector(".card__to").textContent = `To. ${
    document.getElementsByName("to")[0].value
  }`;
  document.querySelector(
    ".card__content"
  ).textContent = document.getElementsByName("content")[0].value;
}

// preview
var previewButton = document.querySelector(".button--preview");
var preview = document.querySelector(".preview");
previewButton.addEventListener("click", function() {
  inputToCard();
  preview.classList.add("preview--open");
});
var previewClose = document.querySelector(".preview__close");
previewClose.addEventListener("click", function() {
  preview.classList.remove("preview--open");
});

// card
var card = document.querySelector(".card");
card.addEventListener("click", function() {
  card.classList.toggle("is-flipped");
});
var cardFace = document.querySelector(".card__face");
var cardImg = document.querySelector(".card__img");
var cardTitle = document.querySelector(".card__title");
cardTitle.style.height = `${cardFace.offsetHeight - cardImg.height}px`;