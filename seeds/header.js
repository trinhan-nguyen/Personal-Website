var unique = require("uniq");

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

module.exports = function() {return headerData;};