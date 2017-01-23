/**
 * @fileoverview
 * @author Nikolai Karastelev
 */

"use strict";

define(function() {

  /* Слайдер на главной странице */

  var slider = document.querySelector(".offers-slider");

  var sliderRadio = slider.querySelectorAll("[name='offers-toggle']");

  var sliderRadioCount = sliderRadio.length;


  var offersSliderPrevBtn = slider.querySelector(".prev-slide");

  offersSliderPrevBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var currentIndex = parseInt(slider.querySelector("[name='offers-toggle']:checked").getAttribute("value"));

    var nextIndex = (currentIndex + sliderRadioCount - 1) % sliderRadioCount;

    sliderRadio[nextIndex].checked = true;
  });


  var offersSliderNextBtn = slider.querySelector(".next-slide");

  offersSliderNextBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var currentIndex = parseInt(slider.querySelector("[name='offers-toggle']:checked").getAttribute("value"));

    var nextIndex = (currentIndex + 1) % sliderRadioCount;

    sliderRadio[nextIndex].checked = true;
  });

});
