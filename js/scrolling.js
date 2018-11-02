var lastScrollPosition = 0;
var topBar = document.querySelector('.navigation');
var illustration = document.querySelector('.main__illustration');

window.addEventListener('scroll', function(){

	console.log(lastScrollPosition);

	var newScrollPosition = window.scrollY;
	 
	if ((newScrollPosition < lastScrollPosition) && newScrollPosition < 10 || (newScrollPosition > lastScrollPosition)) {

	    topBar.classList.remove('js--sticky');

	} else  {
		
		topBar.classList.add('js--sticky');

	}

	lastScrollPosition = newScrollPosition;

	var mainSection = document.querySelector('.main');
	var detect = mainSection.offsetTop;

	if (window.pageYOffset >= detect) {

		illustration.classList.add('js--show');
	}

});