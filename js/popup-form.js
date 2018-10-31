var sign = document.querySelectorAll('.js-popup-trigger');
var popupForm = document.querySelector('.popup-form');
var outerContainer = document.querySelector('.outer-container');
var btnClose = document.querySelector('.btn__close');
var btnSwitchSignin = document.querySelectorAll('.btn__switch-signin');
var btnSwitchSignup = document.querySelectorAll('.btn__switch-signup');
var formEmail = document.querySelector('.form__email');
var formCheckbox = document.querySelector('.form__checkbox');
var btnValue = document.querySelector('.form .btn');

for (var i = 0; i < sign.length; i++) {
    sign[i].addEventListener('click', showPopupForm);
}

for (var i = 0; i < btnSwitchSignin.length; i++) {
	btnSwitchSignin[i].addEventListener('click', switchToSignin);
}

for (var i = 0; i < btnSwitchSignup.length; i++) {
	btnSwitchSignup[i].addEventListener('click', switchToSignup)
}

btnClose.addEventListener('click', hidePopupForm);

function showPopupForm() {
	popupForm.classList.add('js-popup-form--show');
	outerContainer.classList.add('js-body--blur');
};

function hidePopupForm() {
	popupForm.classList.remove('js-popup-form--show');
	outerContainer.classList.remove('js-body--blur');
	formEmail.classList.remove('js-input--hide');
	formCheckbox.classList.remove('js-input--hide');
	btnValue.value = 'Sign Up';

	for (var i = 0; i < btnSwitchSignup.length; i++) {
		btnSwitchSignup[i].classList.add('btn__link--active');
	}
	for (var i = 0; i < btnSwitchSignin.length; i++) {
		btnSwitchSignin[i].classList.remove('btn__link--active');
	}
	
};

function switchToSignin() {
	for (var i = 0; i < btnSwitchSignin.length; i++) {
		btnSwitchSignin[i].classList.add('btn__link--active');
	}
	for (var i = 0; i < btnSwitchSignup.length; i++) {
		btnSwitchSignup[i].classList.remove('btn__link--active');
	}

	formEmail.classList.add('js-input--hide');
	formCheckbox.classList.add('js-input--hide');
	btnValue.value = 'Sign In';
};

function switchToSignup() {
	for (var i = 0; i < btnSwitchSignup.length; i++) {
		btnSwitchSignup[i].classList.add('btn__link--active');
	}
	for (var i = 0; i < btnSwitchSignin.length; i++) {
		btnSwitchSignin[i].classList.remove('btn__link--active');
	}

	formEmail.classList.remove('js-input--hide');
	formCheckbox.classList.remove('js-input--hide');
	btnValue.value = 'Sign Up';
};