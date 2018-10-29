var signUp = document.querySelector('.js-popup-trigger');
var popupForm = document.querySelector('.popup-form');
var outerContainer = document.querySelector('.outer-container');
var btnClose = document.querySelector('.btn__close');

signUp.addEventListener('click', showPopupForm);

btnClose.addEventListener('click', hidePopupForm);

function showPopupForm() {
	outerContainer.classList.add('js-body--blur');
	popupForm.classList.add('js-popup-form--show');
};

function hidePopupForm() {
	popupForm.classList.remove('js-popup-form--show');
	outerContainer.classList.remove('js-body--blur');
};