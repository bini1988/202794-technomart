/**
 * @fileoverview
 * @author Nikolai Karastelev
 */

"use strict";

define(function() {

  /* Всплывающая Google карта */
  var mapDialog = document.querySelector("#map-dialog");

  var mapDialogOpenBtn = document.querySelector(".contacts-map");

  mapDialogOpenBtn.addEventListener("click", function(event) {
    event.preventDefault();

    mapDialog.classList.add("modal-dialog-show-2");
  });

});
