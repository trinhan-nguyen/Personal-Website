//****************
// Initial config
//****************
var timeouts = [];
	aboutMe = $("#about-me").get(0),
	section = $("#section").get(0),
	intro = $("#intro").get(0),
	detail = $("#detail").get(0),
	learnMore = $("#learn-more").get(0),
	projects = $("#projects").get(0),
	inspiration = $("#inspiration").get(0),
	contact = $("#contact").get(0),
	headerOverlay = $(".header-overlay").get(0);

aboutMe.classList.add("active");

// Animation in

function displayNone() {
	section.style.display = "none";
	intro.style.display = "none";
	detail.style.display = "none";
	learnMore.style.display = "none";
}

function removeAnimationClass() {
	section.classList.remove("content-in");
	intro.classList.remove("content-in");
	detail.classList.remove("content-in");
	learnMore.classList.remove("btn-in");
	headerOverlay.style.display = "none";
}

function clearTimeOut() {
	for (var i = 0; i < timeouts.length; ++i) {
		clearTimeout(timeouts[i]);
	}
	timeouts = [];
	removeAnimationClass();
}

animate();

//**********************
// The menu on the side
//**********************
$("#menu-btn").click(function() {
	$("#menu").get(0).style.width = "30%";
	this.style.display = "none";
});

$(".closebtn").click(function() {
	$("#menu").get(0).style.width = "0";
	$("#menu-btn").get(0).style.display = "block";
});

//**********************
//  Header in jumbotron
//**********************

function animate() {
	displayNone();
	clearTimeOut();
	headerOverlay.style.display = "block";
	headerOverlay.classList.add("overlay-in");
	timeouts.push(setTimeout(function() {
		section.classList.toggle("content-in");
		section.style.display = "inline-block";
	}, 300));	
	timeouts.push(setTimeout(function() {
		intro.classList.toggle("content-in");
		detail.classList.toggle("content-in");
		intro.style.display = "block";
		detail.style.display = "block";
		headerOverlay.style.display = "none";
	}, 1000));
	timeouts.push(setTimeout(function() {
		learnMore.classList.toggle("btn-in");
		learnMore.style.display = "inline-block";
	}, 1700));
	timeouts.push(setTimeout(function() {
		removeAnimationClass();
		headerOverlay.classList.remove("overlay-in");
	}, 2400));
}

$("#about-me").click(function() {
	if ($(this).hasClass("active")) {return;}
	animate();
	aboutMe.classList.add("active");
	projects.classList.remove("active");
	inspiration.classList.remove("active");
	contact.classList.remove("active");
	$("#learn-more").text("LEARN MORE");
	$("#section").text("About Me");
	$("#intro").text("Hello. I'm Nhan Nguyen");
	$("#detail").text("Warm greetings to you all from a student" +  
		" at University of Waterloo");
});

$("#projects").click(function() {
	if ($(this).hasClass("active")) {return;}
	animate();
	aboutMe.classList.remove("active");
	projects.classList.add("active");
	inspiration.classList.remove("active");
	contact.classList.remove("active");
	$("#section").text("Projects");
	$("#intro").text("A Little Note About My Projects");
	$("#detail").text("");
});

$("#inspiration").click(function() {
	if ($(this).hasClass("active")) {return;}
	animate();
	aboutMe.classList.remove("active");
	projects.classList.remove("active");
	inspiration.classList.add("active"); 
	contact.classList.remove("active");
	$("#learn-more").text("OVERVIEW OF MY WORK");
	$("#section").text("Inspiration?");
	$("#intro").text("Seeking For Inspiration?");
	$("#detail").text("");
});

$("#contact").click(function() {
	if ($(this).hasClass("active")) {return;}
	animate();
	aboutMe.classList.remove("active");
	projects.classList.remove("active");
	inspiration.classList.remove("active");
	contact.classList.add("active");
	$("#learn-more").text("GET IN TOUCH");
	$("#section").text("Contact");
	$("#intro").text("If You Need Me");
	$("#detail").text("");
});




