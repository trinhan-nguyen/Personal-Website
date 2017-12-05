var Project = require("../models/project"),
	mongoose = require("mongoose");

var projectData = [
	{
		image: "../images/RGBGame.png",
		category: "Web Game",
		title: "The RGB Game",
		content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
	},
	{
		image: "../images/MikkoCompression.png",
		category: "Offline script",
		title: "Mikko Compression",
		content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
	},
	{
		image: "../images/CurrentCConverter.png",
		category: "Andoird template",
		title: "CurrentC Converter",
		content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
	}
];

function seedData() {
	// Removing old data
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