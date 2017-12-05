//****************
// Initial config
//****************
var timeouts = [],
	aboutMe = $("#about-me").get(0),
	section = $("#section").get(0),
	intro = $("#intro").get(0),
	detail = $("#detail").get(0),
	learnMore = $("#learn-more").get(0),
	projects = $("#projects").get(0),
	inspiration = $("#inspiration").get(0),
	contact = $("#contact").get(0),
	headerOverlay = $(".header-overlay").get(0),
	headerData = [
		{
			section: "About me",
			intro: "Hello. I'm Nhan Nguyen",
			detail: "Warm greetings to you all from Nhan Nguyen",
			button: "Learn more"
		},
		{
			section: "Projects",
			intro: "A Little Note About My Projects",
			detail: "These projects are made while I was dabbling in programming",
			button: "Wander through"
		},
		{
			section: "Inspiration?",
			intro: "Seeking for inspiration?",
			detail: "Everyone was once a novice. Let's explore",
			button: "Overview of my work"
		},
		{
			section: "Contact",
			intro: "Need someone for your projects?",
			detail: "I'm available for work. Let's get down to business",
			button: "Get in touch"
		}
	];

aboutMe.classList.add("active");

//***************
//  Animation in
//***************

AOS.init({
  duration: 1800,
  easing: 'ease-in-out-back'
});

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

updateText(0);
animate();

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
	}, 2200));
}

function updateText(fromSection) {
	var textData = headerData[fromSection];
	$("#learn-more").text(textData.button);
	$("#section").text(textData.section);
	$("#intro").text(textData.intro);
	$("#detail").text(textData.detail);
}

$("#about-me").click(function() {
	if ($(this).hasClass("active")) {return;}
	animate();
	aboutMe.classList.add("active");
	projects.classList.remove("active");
	inspiration.classList.remove("active");
	contact.classList.remove("active");
	updateText(0);
});

$("#projects").click(function() {
	if ($(this).hasClass("active")) {return;}
	animate();
	aboutMe.classList.remove("active");
	projects.classList.add("active");
	inspiration.classList.remove("active");
	contact.classList.remove("active");
	updateText(1);
});

$("#inspiration").click(function() {
	if ($(this).hasClass("active")) {return;}
	animate();
	aboutMe.classList.remove("active");
	projects.classList.remove("active");
	inspiration.classList.add("active"); 
	contact.classList.remove("active");
	updateText(2);
});

$("#contact").click(function() {
	if ($(this).hasClass("active")) {return;}
	animate();
	aboutMe.classList.remove("active");
	projects.classList.remove("active");
	inspiration.classList.remove("active");
	contact.classList.add("active");
	updateText(3);
});




