/**
 * @fileoverview
 * @author Nikolai Karastelev
 */

"use strict";

define(function() {

  var overlay = document.querySelector(".overlay");

  var modalDialogs = document.querySelectorAll(".modal-dialog");


  Array.prototype.forEach.call(modalDialogs, function(dialog, index) {

    var dialogCloseBtn = dialog.querySelector(".modal-dialog-close");

    dialogCloseBtn.addEventListener("click", function(event) {
      event.preventDefault();

      dialog.classList.remove("modal-dialog-show-1");
      overlay.classList.remove("overlay-show");
    });

  });

  window.addEventListener("keydown", function(event) {

    var ESC_KEY_CODE = 27;

    if (event.keyCode === ESC_KEY_CODE) {

      Array.prototype.forEach.call(modalDialogs, function(dialog, index) {

        dialog.classList.remove("modal-dialog-show-1");
        overlay.classList.remove("overlay-show");
      });
    }

  });

});
