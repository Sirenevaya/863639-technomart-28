var buttonBuy = document.querySelectorAll('.button-buy');
var notifyPopup = document.querySelector(".modal-notify");
var modalClose = notifyPopup.querySelector(".modal-close");

for (var buttonsBuy of buttonBuy) {
    buttonsBuy.addEventListener("click", function (evt) {
        evt.preventDefault();
        notifyPopup.classList.add("modal-show");
    });
};

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    notifyPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (notifyPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            notifyPopup.classList.remove("modal-show");
        }
    }
});