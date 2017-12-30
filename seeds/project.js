var Project = require("../models/project"),
	mongoose = require("mongoose");

var projectData = [
	{
		image: "../images/RGBGame.png",
		category: "Web Game",
		title: "The RGB Game",
		content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
		url: "https://github.com/nhan-tri-nguyen/RGBGame"
	},
	{
		image: "../images/MikkoCompression.png",
		category: "Offline Script",
		title: "Mikko Compression",
		content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
		url: "https://github.com/nhan-tri-nguyen/MikkoCompression"
	},
	{
		image: "../images/CurrentCConverter.png",
		category: "Andoird App",
		title: "CurrentC Converter",
		content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
		url: "https://github.com/nhan-tri-nguyen/CurrentCConverter"
	},
	{
		image: "../images/HushUp.png",
		category: "Andoird App",
		title: "Hush Up",
		content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
		url: "https://github.com/nhan-tri-nguyen/HushUp"
	},
	{
		image: "../images/TicTacToe.png",
		category: "Andoird App",
		title: "Tic Tac Toe",
		content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
		url: "https://github.com/nhan-tri-nguyen"
	},
	{
		image: "../images/ToDoList.png",
		category: "Web App",
		title: "TO-DO List",
		content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
		url: "https://github.com/nhan-tri-nguyen/TodoList"
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