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

    modalMessage.classList.add("modal-dialog-show-1");

    modalMessageNameField.focus();
  });

});
