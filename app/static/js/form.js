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

// image load and cut
var cropper = null;
var inputImg = document.querySelector(".form__input--img");
var previewImage = document.getElementById('card_img');
var cropperImage = document.querySelector('.img__cropper');
inputImg.addEventListener("change", function(){
    if(this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var img = new Image();
            img.onload = function(){
                cropper = new Cropper(cropperImage, {
                    aspectRatio: 1 / 1,
                    scalable: false
                });
            };
            cropperImage.setAttribute("src", e.target.result);
            previewImage.setAttribute("src", e.target.result);
            img.src = e.target.result;
        };
        reader.readAsDataURL(this.files[0]);
    }
});

// button submit
var submit_btn = document.querySelector(".button--submit");
submit_btn.addEventListener("click", function(e) {
    if(cropper === null){
        e.preventDefault();
        alert("사진이 업로드 되지 않았습니다! 사진을 업로드 해주세요!");
    }
    else {
        var queryString = location.search;
        var cardType = new URLSearchParams(queryString).get("type") || "1";
        var cardForm = document.querySelector(".form");
        var uploadImg = cardForm.elements["img"].value;
        cardForm.elements["card_type"].value = cardType;
        var cropData = cropper.getData();
        cropper.getCroppedCanvas({
            width: cropData.width + cropData.x,
            height: cropData.height + cropData.y,
            maxWidth: 1000,
            maxHeight: 1000,
            imageSmoothingQuality: "high"
        }).toBlob( function (blob) {
            cardForm.elements["img"].files[0] = new File([blob], uploadImg.name, {
                type: uploadImg.type
            });
        });
        cardForm.submit();
    }
});