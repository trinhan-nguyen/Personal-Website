$("#about-me").get(0).classList.add("active");

$("#menu-btn").click(function() {
	$("#menu").get(0).style.width = "30%";
	this.style.display = "none";
});

$(".closebtn").click(function() {
	$("#menu").get(0).style.width = "0";
	$("#menu-btn").get(0).style.display = "block";
});

$("#about-me").click(function() {
	$("#about-me").get(0).classList.add("active");
	$("#projects").get(0).classList.remove("active");
	$("#inspiration").get(0).classList.remove("active");
	$("#contact").get(0).classList.remove("active");
});

$("#projects").click(function() {
	$("#about-me").get(0).classList.remove("active");
	$("#projects").get(0).classList.add("active");
	$("#inspiration").get(0).classList.remove("active");
	$("#contact").get(0).classList.remove("active");
});

$("#inspiration").click(function() {
	$("#about-me").get(0).classList.remove("active");
	$("#projects").get(0).classList.remove("active");
	$("#inspiration").get(0).classList.add("active");
	$("#contact").get(0).classList.remove("active");
});

$("#contact").click(function() {
	$("#about-me").get(0).classList.remove("active");
	$("#projects").get(0).classList.remove("active");
	$("#inspiration").get(0).classList.remove("active");
	$("#contact").get(0).classList.add("active");
});