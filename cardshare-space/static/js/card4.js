// 카드 뒤집기
var card = document.querySelector(".card");
card.addEventListener("click", function() {
card.classList.toggle("is-flipped");
});

// 처음 접속시 카드 뒤집어 보여주기
setTimeout(() => {
card.classList.toggle("is-flipped");
}, 0);
setTimeout(() => {
card.classList.toggle("is-flipped");
}, 1500);

// 카드 만들기 버튼으로 메인 이동
var mkBtn = document.querySelector(".button--mkcard");
mkBtn.addEventListener("click", function() {
    location.replace("/");
});