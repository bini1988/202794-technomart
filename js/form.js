/**
 * @fileoverview
 * @author Nikolai Karastelev
 */

"use strict";

define(function() {

  /* Форма обратной связи */


  var modalMessage = document.querySelector(".modal-content-message");

  var modalMessageNameField = modalMessage.querySelector("[name=user-name]");


  var modalMessageOpenBtn = document.querySelector(".btn-send-message");

  modalMessageOpenBtn.addEventListener("click", function(event) {
    event.preventDefault();

    modalMessage.classList.add("modal-content-show-1");

    modalMessageNameField.focus();
  });


  var modalMessageCloseBtn = modalMessage.querySelector(".modal-content-close");

  modalMessageCloseBtn.addEventListener("click", function(event) {
    event.preventDefault();

    modalMessage.classList.remove("modal-content-show-1");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (modalMessage.classList.contains("modal-content-show-1")) {
        modalMessage.classList.remove("modal-content-show-1");
      }
    }
  });

});
