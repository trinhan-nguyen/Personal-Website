//****************
// Initial config
//****************
var timeouts = [],
	intro = $("#intro").get(0),
	detail = $("#detail").get(0),
	headerOverlay = $(".header-overlay").get(0);

function displayNone() {
	intro.style.display = "none";
	detail.style.display = "none";
}

function removeAnimationClass() {
	intro.classList.remove("content-in");
	detail.classList.remove("content-in");
	headerOverlay.style.display = "none";
}

function clearTimeOut() {
	for (var i = 0; i < timeouts.length; ++i) {
		clearTimeout(timeouts[i]);
	}
	timeouts = [];
	removeAnimationClass();
}

function animate() {
	displayNone();
	clearTimeOut();
	headerOverlay.style.display = "block";
	headerOverlay.classList.add("overlay-in");
	timeouts.push(setTimeout(function() {
		headerOverlay.style.display = "none";
		detail.classList.toggle("content-in");
		detail.style.display = "block";
		intro.classList.toggle("content-in");
		intro.style.display = "block";
	}, 1200));
	timeouts.push(setTimeout(function() {
		removeAnimationClass();
		headerOverlay.classList.remove("overlay-in");
	}, 2000));
}

animate();

AOS.init({
  duration: 1800,
  easing: 'ease-in-out-back'
});

