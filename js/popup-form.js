var sign = document.querySelectorAll('.js-popup-trigger');
var popupForm = document.querySelector('.popup-form');
var outerContainer = document.querySelector('.outer-container');
var btnClose = document.querySelector('.btn__close');
var btnSignin = document.querySelectorAll('.btn__switch-signin');
var btnSignup = document.querySelectorAll('.btn__switch-signup');
var formEmail = document.querySelector('.form__email');
var formCheckbox = document.querySelector('.form__checkbox');
var btnValue = document.querySelector('.form .btn');
var btnInnerTxt= document.querySelector('.btn__inner-txt');
var scrollableElement = document.querySelector('.scrollableElement');
var topBar = document.querySelector('.navigation');


for (var i = 0; i < sign.length; i++) {
    sign[i].addEventListener('click', showPopupForm);
}

for (var i = 0; i < btnSignin.length; i++) {
	btnSignin[i].addEventListener('click', switchToSignin);
}

for (var i = 0; i < btnSignup.length; i++) {
	btnSignup[i].addEventListener('click', switchToSignup)
}

btnClose.addEventListener('click', hidePopupForm);

// scrollableElement.addEventListener('wheel', findScrollDirection);

function showPopupForm() {
	popupForm.classList.remove('js-el--hide');
	outerContainer.classList.add('js-body--blur');
};

function hidePopupForm() {
	for (var i = 0; i < btnSignup.length; i++) {
		btnSignup[i].classList.add('btn__link--active');
	}
	for (var i = 0; i < btnSignin.length; i++) {
		btnSignin[i].classList.remove('btn__link--active');
	}

	popupForm.classList.add('js-el--hide');
	outerContainer.classList.remove('js-body--blur');
	formEmail.classList.remove('js-el--hide');
	formCheckbox.classList.remove('js-el--hide');
	btnValue.value = 'Sign Up';
	btnInnerTxt.innerText = 'I have an account';	
};

function switchToSignin() {
	for (var i = 0; i < btnSignin.length; i++) {
		btnSignin[i].classList.add('btn__link--active');
	}
	for (var i = 0; i < btnSignup.length; i++) {
		btnSignup[i].classList.remove('btn__link--active');
	}

	formEmail.classList.add('js-el--hide');
	formCheckbox.classList.add('js-el--hide');
	btnValue.value = 'Sign In';
	btnInnerTxt.textContent = '';
};

function switchToSignup() {
	for (var i = 0; i < btnSignup.length; i++) {
		btnSignup[i].classList.add('btn__link--active');
	}
	for (var i = 0; i < btnSignin.length; i++) {
		btnSignin[i].classList.remove('btn__link--active');
	}

	formEmail.classList.remove('js-el--hide');
	formCheckbox.classList.remove('js-el--hide');
	btnValue.value = 'Sign Up';
	btnInnerTxt.textContent = 'I have an account';
};


// function findScrollDirection(event){

//     var delta;

//     if (event.wheelDelta){

//         delta = event.wheelDelta;

//     } else{

//         delta = -1 *event.deltaY;
//     }

//     if (delta <= 0){

//         topBar.classList.remove('js--sticky');

//     } else if (delta > 0){

//         topBar.classList.add('js--sticky');

//     }
// }

    var lastScrollPosition = 0;
    window.onscroll = function() {
        var newScrollPosition = window.scrollY;
 
        if (newScrollPosition < lastScrollPosition){


            topBar.classList.add('js--sticky');
        }else{

             
             topBar.classList.remove('js--sticky');
        }
        lastScrollPosition = newScrollPosition;
    }