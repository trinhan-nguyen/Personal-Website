var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	app = express();

// App config
mongoose.connect("mongodb://localhose/personal_website");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Render homepage
app.get("/", function(req, res) {
	res.render("home");
});

// Server config
app.listen(3000, function() {
	console.log("Server started");
});