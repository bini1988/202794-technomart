/**
 * @fileoverview
 * @author Nikolai Karastelev
 */

"use strict";

define(function() {

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

});
