var lastScrollPosition = 0;
var topBar = document.querySelector('.navigation');
var illustration = document.querySelector('.main__illustration');

window.addEventListener('scroll', scrolling);

function scrolling() {

	var newScrollPosition = window.pageYOffset;
	 
	if ((newScrollPosition < lastScrollPosition) && newScrollPosition < 100 || (newScrollPosition > lastScrollPosition)) {

	    topBar.classList.remove('js--sticky');

	} else  {

		topBar.classList.add('js--sticky');

	}

	lastScrollPosition = newScrollPosition;

	var mainSection = document.querySelector('.main');
	var detect = mainSection.offsetTop;

	if (newScrollPosition >= detect) {

		illustration.classList.add('js--show');
	}

};