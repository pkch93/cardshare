// form to card
function inputToCard() {
  document.querySelector(
    ".card__title"
  ).textContent = document.getElementsByName("title")[0].value;
  document.querySelector(".card__from").textContent = `From. ${
    document.getElementsByName("writer")[0].value
  }`;
  document.querySelector(".card__to").textContent = `To. ${
    document.getElementsByName("receiver")[0].value
  }`;
  document.querySelector(
    ".card__content"
  ).textContent = document.getElementsByName("content")[0].value;
 document.getElementsByClassName(
 "card__img"
 )[0].src = cropper.getCroppedCanvas().toDataURL("image/jpeg");
}

// preview
var previewButton = document.querySelector(".button--preview");
var preview = document.querySelector(".preview");
previewButton.addEventListener("click", function() {
   if(
     document.getElementsByName("writer")[0].value === "" ||
     document.getElementsByName("receiver")[0].value === "" ||
     document.getElementsByName("title")[0].value === "" ||
     document.getElementsByName("content")[0].value === "" ||
     document.getElementById("cropper__img").src === ""
   ) {
     alert("양식을 모두 채워주세요.");
   } else {
     inputToCard();
     preview.classList.add("preview--open");
   }
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