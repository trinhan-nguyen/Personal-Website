//**********************
// The menu on the side
//**********************
var menuOn = false,
	menu = $("#menu").get(0),
	menuBtn = $("#menu-btn"),
	closeBtn = $(".closebtn");

function menuResize() {
	if ($(window).width() <= 767) {
		menu.style.width = "50%";
	}
	else {
		menu.style.width = "33%";
	}
}

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