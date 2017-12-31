var Project = require("./models/project"),
	express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	projectData = require("./seeds/project"),
	app = express();

// App config
mongoose.connect("mongodb://ngtrnhan1205:123456789@ds239047.mlab.com:39047/promise");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
projectData();

// Render homepage
app.get("/", function(req, res) {
	Project.find({}, function(err, projects) {
		if (err) {
			console.log(err);
		} else {
			res.render("home", {projects: projects});
		}
	});
});

// Render about-me
app.get("/about", function(req, res) {
	res.render("./about/index");
});

// Render projects
app.get("/projects", function(req, res) {
	Project.find({}, function(err, projects) {
		if (err) {
			console.log(err);
		} else {
			res.render("./projects/index", {projects: projects});
		}
	});
});

// Render contact
app.get("/contact", function(req, res) {
	res.render("./contact/index");
});

// Catch unknown pages
app.get("/*", function(req, res) {
	res.render("./pnf/index");
});

// Server config
app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server started");
});