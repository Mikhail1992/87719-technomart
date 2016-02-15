var link = document.querySelector(".btn-map");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]")
var email = popup.querySelector("[name=email]")
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("show-popup");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("show-popup");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function(event) {
  event.preventDefault();
  if(!email.value || !login.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно представиться и ввести e-mail");
  } else {
    localStorage.setItem("login", login.value);
  }
});
 window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("show-popup")) {
      popup.classList.remove("show-popup");
      popup.classList.remove("modal-error");
    }
  }
});
var mapOpen = document.querySelector(".open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("show-popup");
});
mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("show-popup");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("show-popup")) {
      mapPopup.classList.remove("show-popup");
    }
  }
});
