var Project = require("../models/project"),
	mongoose = require("mongoose");

var projectData = [
    {
		image: "../images/CodeAggregator.webp",
		imageFallBack: "../images/CodeAggregator.png",
		category: "Web App",
		title: "Code Aggregator",
		content: "Code Aggregator (created by Nhat Nguyen) is a leaderboard that encourages solving computational problems amongst friends by tracking solved problems as well as suggesting visualizing related questions.",
		url: "http://leetcode-fe.azurewebsites.net"
    },

    {
		image: "../images/Biquadris.webp",
		imageFallBack: "../images/Biquadris.png",
		category: "Terminal Game",
		title: "Biquadris",
        content: "Biquadris is a Tetris-like game with 2 players. Biquadris made use of multiple design patterns including MVC, Factory Method, Observer, Decorator appropriately.",
		url: "http://nhan-tri-nguyen.herokuapp.com/projects"
    },

	{
		image: "../images/ConwayGameOfLife.webp",
		imageFallBack: "../images/ConwayGameOfLife.png",
		category: "Zero-player game",
		title: "Conway Game of Life",
        content: "Conway Game of Life is a zero-player game invented by John Horton Conway in 1970. The application is written in Rust and compiled to Web Assembly so it can be run on browsers",
        url: "https://github.com/tri-nhan-nguyen/ConwayGameOfLife"
	},


    {
		image: "../images/TicTacToe.webp",
		imageFallBack: "../images/TicTacToe.png",
		category: "Web Game",
		title: "Tic Tac Toe",
		content: "Tic-Tac-Toe is just a simple but well-known game. This app uses React.js to save states so that we can go back and forth between states.",
		url: "https://tri-nhan-nguyen.github.io/TicTacToe/"
	},

	{
		image: "../images/CurrentCConverter.webp",
		imageFallBack: "../images/CurrentCConverter.png",
		category: "Android App",
		title: "CurrentC Converter",
		content: "CurrentC Converter is my very first Android App. Since I developed this app while acquiring new knowledge, this app acts  more like an Android template than a functional app.",
        url: "https://github.com/tri-nhan-nguyen/CurrentCConverter"
	},

	{
		image: "../images/HushUp.webp",
		imageFallBack: "../images/HushUp.png",
		category: "Android App",
		title: "Hush Up",
		content: "Getting tired of phones ringing in the middle of the class, Hush Up was invented to hush phones up. Using Google Geofences, Hush Up turns phones into silent mode when entering predeterminate zones",
		url: "https://github.com/nhan-tri-nguyen/HushUp"
	},

	{
		image: "../images/RGBGame.webp",
		imageFallBack: "../images/RGBGame.png",
		category: "Web Game",
		title: "The RGB Game",
		content: "RGB color model is widely used in electronic systems. The RGB game aims to practice color detection in RGB moddel by choosing the color that matches a given RGB code.",
		url: "https://tri-nhan-nguyen.github.io/RGBGame/"
	},

	{
		image: "../images/ToDoList.webp",
		imageFallBack: "../images/ToDoList.png",
		category: "Web App",
		title: "TO-DO List",
		content: "TO-DO List is a single page web app. The app allows people to make their to-do list with nice and clean user interfaces",
		url: "https://tri-nhan-nguyen.github.io/To-DoList/"
	},

    {
		image: "../images/EasyNoter.webp",
		imageFallBack: "../images/EasyNoter.png",
		category: "Android App",
        title: "Easy Noter",
        content: "Easy Noter is a simple note-taking app that employs MVVM design pattern.",
        url: "https://github.com/tri-nhan-nguyen/EasyNoter"
    },

	{
		image: "../images/MikkoCompression.webp",
		imageFallBack: "../images/MikkoCompression.png",
		category: "Offline Script",
		title: "Mikko Compression",
		content: "Nhat Nguyen and Thao Tran found that rolling through repetitive slides when studying is annoying. They suggested creating a tool to fix that. Consequently, Mikko Compression was born.",
		url: "https://github.com/tri-nhan-nguyen/MikkoCompression"
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
