/* Модальное сообщение */

var modalDialogOpenBtns = document.querySelectorAll(".product-item .actions .buy");

var overlay = document.querySelector(".overlay");

for(var counter = 0; counter < modalDialogOpenBtns.length; counter++) {
		
	modalDialogOpenBtns[counter].addEventListener("click", function(event) {
		event.preventDefault();

		modalDialog.classList.add("modal-content-show-1");
		overlay.classList.add("overlay-show");
	});
}

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
