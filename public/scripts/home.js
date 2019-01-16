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
	headerData = [
		{
			section: "About me",
			intro: "Hello. I'm Nhan Nguyen",
			detail: "Warm greeting from Nhan Nguyen",
			button: "Learn more",
			href: "/about"
		},
		{
			section: "Projects",
			intro: "A Little Note About My Projects",
			detail: "These projects are made while I was dabbling in programming",
			button: "Wander through",
			href: "/projects"
		},
		{
			section: "Inspiration?",
			intro: "Seeking for inspiration?",
			detail: "Everyone was once a novice. Let's explore",
			button: "Overview of my work",
			href: "/projects"
		},
		{
			section: "Contact",
			intro: "Need someone for your projects?",
			detail: "I'm available for work. Let's get down to business",
			button: "Get in touch",
			href: "/contact"
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
	timeouts.push(setTimeout(function() {
		section.classList.toggle("content-in");
		section.style.display = "inline-block";
	}, 30));	
	timeouts.push(setTimeout(function() {
		intro.classList.toggle("content-in");
		detail.classList.toggle("content-in");
		intro.style.display = "block";
		detail.style.display = "block";
	}, 600));
	timeouts.push(setTimeout(function() {
		learnMore.classList.toggle("btn-in");
		learnMore.style.display = "inline-block";
	}, 1200));
	timeouts.push(setTimeout(function() {
		removeAnimationClass();
	}, 1800));
}

function updateText(fromSection) {
	var data = headerData[fromSection];
	$("#learn-more").attr("href", data.href);
	$("#learn-more").text(data.button);
	$("#section").text(data.section);
	$("#intro").text(data.intro);
	$("#detail").text(data.detail);
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

