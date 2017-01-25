/**
 * @fileoverview
 * @author Nikolai Karastelev
 */

"use strict";

define(function() {

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

});
