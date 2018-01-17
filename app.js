var Project = require("./models/project"),
	express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	projectData = require("./seeds/project"),
	app = express();

// App config
mongoose.connect(process.env.DATABASEURL || "mongodb://localhost/yelp_camp_v10");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
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
app.listen(process.env.PORT || 3000, process.env.IP, function() {
	console.log("Server started");
});