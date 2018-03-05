var Project = require("../models/project"),
	mongoose = require("mongoose");

var projectData = [
	{
		image: "../images/RGBGame.webp",
		category: "Web Game",
		title: "The RGB Game",
		content: "RGB color model is widely used in electronic systems. The RGB game aims to practice color detection in RGB moddel by choosing the color that matches a given RGB code.",
		url: "https://nhan-tri-nguyen.github.io/RGBGame/"
	},
	{
		image: "../images/MikkoCompression.webp",
		category: "Offline Script",
		title: "Mikko Compression",
		content: "Nhat Nguyen and Thao Tran found that rolling through repetitive slides when studying is annoying. They suggested creating a tool to fix that. Consequently, Mikko Compression was born.",
		url: "https://github.com/nhan-tri-nguyen/MikkoCompression"
	},
	{
		image: "../images/CurrentCConverter.webp",
		category: "Android App",
		title: "CurrentC Converter",
		content: "CurrentC Converter is my very first Android App. Since I developed this app while acquiring new knowledge, this app acts  more like an Android template than a functional app.",
		url: "https://github.com/nhan-tri-nguyen/CurrentCConverter"
	},
	{
		image: "../images/HushUp.webp",
		category: "Android App",
		title: "Hush Up",
		content: "Getting tired of phones ringing in the middle of the class, Hush Up was invented to hush phones up. Using Google Geofences, Hush Up turns phones into silent mode when entering predeterminate zones",
		url: "https://github.com/nhan-tri-nguyen/HushUp"
	},
	{
		image: "../images/TicTacToe.webp",
		category: "Android App",
		title: "Tic Tac Toe",
		content: "Tic-Tac-Toe is just a simple but well-known game. This app uses React.js to save states so that we can go back and forth between states.",
		url: "https://nhan-tri-nguyen.github.io/TicTacToe/"
	},
	{
		image: "../images/ToDoList.webp",
		category: "Web App",
		title: "TO-DO List",
		content: "TO-DO List is a single page web app. The app allows people to make their to-do list with nice and clean user interfaces",
		url: "https://nhan-tri-nguyen.github.io/To-DoList/"
	}
];

function seedData() {
	// Removing old dataDoList
	Project.remove({}, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log("Removed all projects");
		}
	})
	Project.create(projectData, function(err, campgrounds) {
		if (err) {
			console.log(err);
		} else {
			console.log("Successful seeding");
		}
	});
}

module.exports = seedData;