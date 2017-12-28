//**********************
// The menu on the side
//**********************
var menuOn = false,
	menu = $("#menu").get(0),
	menuBtn = $("#menu-btn"),
	closeBtn = $(".closebtn"),
	homeSide = $("#home-side").get(0),
	aboutSide = $("#about-side").get(0),
	projectsSide = $("#projects-side").get(0),
	contactSide = $("#contact-side").get(0),
	overlay = $(".overlay-content");

function menuResize() {
	if ($(window).width() <= 767) {
		menu.style.width = "50%";
	}
	else {
		menu.style.width = "33%";
	}
}

function removeSideActive() {
	homeSide.classList.remove("overlay-active");
	aboutSide.classList.remove("overlay-active");
	projectsSide.classList.remove("overlay-active");
	contactSide.classList.remove("overlay-active");
}

function init() {
	removeSideActive();	
	var currentUrl = window.location.href.toString();
	switch (currentUrl[currentUrl.length - 2]) {
		case "0":
			homeSide.classList.add("overlay-active");
			break;
		case "u":
			aboutSide.classList.add("overlay-active");
			break;
		case "t":
			projectsSide.classList.add("overlay-active");
		case "c":
			contactSide.classList.add("overlay-active");
			break;
		default:
			break;
	}
}

init();

menuBtn.hover(
	function() {
		menu.style.width = "10px";
	}, function() {
		if (!menuOn) {
			menu.style.width = "0";
		}
	}
);

$(window).resize(function() {
	if (menuOn) menuResize();
});

menuBtn.click(function() {
	menuResize();
	this.style.display = "none";
	menuOn = true;
});

closeBtn.click(function() {
	menu.style.width = "0";
	menuBtn.get(0).style.display = "block";
	menuOn = false;
});