//**********************
// The menu on the side
//**********************
var menuOn = false;

$("#menu-btn").hover(
	function() {
		$("#menu").get(0).style.width = "10px";
	}, function() {
		if (!menuOn) {
			$("#menu").get(0).style.width = "0";
		}
	}
);

$("#menu-btn").click(function() {
	$("#menu").get(0).style.width = "33%";
	this.style.display = "none";
	menuOn = true;
});

$(".closebtn").click(function() {
	$("#menu").get(0).style.width = "0";
	$("#menu-btn").get(0).style.display = "block";
	menuOn = false;
});