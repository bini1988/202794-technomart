/**
 * @fileoverview
 * @author Nikolai Karastelev
 */

(function() {

  /* Форма обратной связи */

  var modalMessage = document.querySelector("#message-dialog");

  if (modalMessage) {

    var nameField = modalMessage.querySelector("#name");
    var mailField = modalMessage.querySelector("#mail");
    var messageField = modalMessage.querySelector("#message");

    var userName = localStorage.getItem("user-name") || "";
    var userEmail = localStorage.getItem("user-email") || "";

    nameField.value = userName;
    mailField.value = userEmail;

    var modalMessageSubmitBtn = modalMessage.querySelector("input[type=submit]");

    modalMessageSubmitBtn.addEventListener("click", function(event) {
      //event.preventDefault();

      localStorage.setItem("user-name", nameField.value);
      localStorage.setItem("user-email", mailField.value);
    });


    var modalMessageOpenBtn = document.querySelector(".btn-send-message");

    modalMessageOpenBtn.addEventListener("click", function(event) {
      event.preventDefault();

      modalMessage.classList.add("modal-dialog-show-1");
    });
  }

}());
(function() {

  /* Всплывающая Google карта */
  var mapDialog = document.querySelector("#map-dialog");

  if (mapDialog) {

    var mapDialogOpenBtn = document.querySelector(".contacts-map");

    mapDialogOpenBtn.addEventListener("click", function(event) {
      event.preventDefault();

      mapDialog.classList.add("modal-dialog-show-2");
    });
  }

}());
(function() {

  /* Всплывающий модальный диалог */
  var overlay = document.querySelector(".overlay");

  var modalDialogs = document.querySelectorAll(".modal-dialog");


  Array.prototype.forEach.call(modalDialogs, function(dialog, index) {

    var dialogCloseBtn = dialog.querySelector(".modal-dialog-close");

    dialogCloseBtn.addEventListener("click", function(event) {
      event.preventDefault();

      dialog.classList.remove("modal-dialog-show-2");
      dialog.classList.remove("modal-dialog-show-1");
      overlay.classList.remove("overlay-show");
    });

  });

  window.addEventListener("keydown", function(event) {

    var ESC_KEY_CODE = 27;

    if (event.keyCode === ESC_KEY_CODE) {

      Array.prototype.forEach.call(modalDialogs, function(dialog, index) {

        dialog.classList.remove("modal-dialog-show-2");
        dialog.classList.remove("modal-dialog-show-1");
        overlay.classList.remove("overlay-show");
      });
    }

  });

}());
(function() {

  /* Всплывающее сообщение карточки товаров */
  var modalDialog = document.querySelector("#item-dialog");

  var modalDialogOpenBtns = document.querySelectorAll(".product-item .actions .buy");

  var overlay = document.querySelector(".overlay");

  for (var counter = 0; counter < modalDialogOpenBtns.length; counter++) {

    modalDialogOpenBtns[counter].addEventListener("click", function(event) {
      event.preventDefault();

      modalDialog.classList.add("modal-dialog-show-1");
      overlay.classList.add("overlay-show");
    });
  }

}());
(function() {

  /* Слайдер на главной странице */

  var offerSlider = document.querySelector(".offers-slider");

  if (offerSlider) {

    var offerSlides = offerSlider.querySelector(".offer-slides"),
      offerSlidesDots = offerSlider.querySelectorAll(".offers-slider-controls"),
      prevSlideBtn = offerSlider.querySelector(".btn-slide.prev-slide"),
      nextSlideBtn = offerSlider.querySelector(".btn-slide.next-slide");

    $(offerSlides).slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: true,
      prevArrow: prevSlideBtn,
      nextArrow: nextSlideBtn,
      pauseOnFocus: false,
      pauseOnHover: false,
      dots: true,
      dotsClass: "offers-slider offers-slider-controls"
    });

  }

}());
