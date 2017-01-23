/**
 * @fileoverview
 * @author Nikolai Karastelev
 */

"use strict";

define(function() {

  /* Модальное сообщение */
  var modalDialog = document.querySelector(".modal-content-dialog");

  var modalDialogCancelBtn = document.querySelector(".btn-cancel");

  modalDialogCancelBtn.addEventListener("click", function(event) {
    event.preventDefault();

    modalDialog.classList.remove("modal-content-show-1");
    overlay.classList.remove("overlay-show");
  });


  var modalDialogCloseBtn = modalDialog.querySelector(".modal-content-close");

  modalDialogCloseBtn.addEventListener("click", function(event) {
    event.preventDefault();

    modalDialog.classList.remove("modal-content-show-1");
    overlay.classList.remove("overlay-show");
  });


  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (modalDialog.classList.contains("modal-content-show-1")) {
        modalDialog.classList.remove("modal-content-show-1");
      }
      if (overlay.classList.contains("overlay-show")) {
        overlay.classList.remove("overlay-show");
      }
    }
  });

});
