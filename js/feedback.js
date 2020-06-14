var contactsButton = document.querySelector(".contacts-button");
var contactsPopup = document.querySelector(".modal-feedback");
var modalClose = contactsPopup.querySelector(".modal-close");
var formFeedback = contactsPopup.querySelector(".modal-feedback-form");
var nameFeedback = contactsPopup.querySelector(".name-feedback");
var emailFeedback = contactsPopup.querySelector(".email-feedback");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");

  if (storage) {
    nameFeedback.value = storage;
    emailFeedback.focus();
  } else {
    nameFeedback.focus();
  }
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-show");
  contactsPopup.classList.remove("modal-error");    // !!!
});

formFeedback.addEventListener("submit", function (evt) {
  if (!nameFeedback.value || !emailFeedback.value) {
    evt.preventDefault();
    contactsPopup.classList.remove("modal-error");
    contactsPopup.offsetWidth = contactsPopup.offsetWidth;
    contactsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameFeedback.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactsPopup.classList.remove("modal-show");
      contactsPopup.classList.remove("modal-error");
    }
  }
});