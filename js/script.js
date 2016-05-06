/* Форма обратной связи */

var modalMessage = document.querySelector(".modal-content-message");

var modalMessageNameField = modalMessage.querySelector("[name=user-name]");


var modalMessageOpenBtn = document.querySelector(".button-send-message");

modalMessageOpenBtn.addEventListener("click", function(event) {
	event.preventDefault();

	modalMessage.classList.add("modal-content-show");

	modalMessageNameField.focus();
});


var modalMessageCloseBtn = modalMessage.querySelector(".modal-content-close");

modalMessageCloseBtn.addEventListener("click", function(event) {
	event.preventDefault();

	modalMessage.classList.remove("modal-content-show");
});


/* Карта */

var modalMap = document.querySelector(".modal-content-map");

var modalMapOpenBtn = document.querySelector(".contacts-map");

modalMapOpenBtn.addEventListener("click", function(event) {
	event.preventDefault();

	modalMap.classList.add("modal-content-show");
});


var modalMapCloseBtn = modalMap.querySelector(".modal-content-close");

modalMapCloseBtn.addEventListener("click", function(event) {
	event.preventDefault();

	modalMap.classList.remove("modal-content-show");
});

/* Общее */
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (modalMessage.classList.contains("modal-content-show")) {
			modalMessage.classList.remove("modal-content-show");
		}

		if (modalMap.classList.contains("modal-content-show")) {
			modalMap.classList.remove("modal-content-show");
		}
	}
});