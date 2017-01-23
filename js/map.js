/**
 * @fileoverview
 * @author Nikolai Karastelev
 */

"use strict";

define(function() {

  /* Карта */
  var modalMap = document.querySelector(".modal-content-map");

  var modalMapOpenBtn = document.querySelector(".contacts-map");

  modalMapOpenBtn.addEventListener("click", function(event) {
    event.preventDefault();

    modalMap.classList.add("modal-content-show-2");
  });


  var modalMapCloseBtn = modalMap.querySelector(".modal-content-close");

  modalMapCloseBtn.addEventListener("click", function(event) {
    event.preventDefault();

    modalMap.classList.remove("modal-content-show-2");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (modalMap.classList.contains("modal-content-show-2")) {
        modalMap.classList.remove("modal-content-show-2");
      }
    }
  });

});
