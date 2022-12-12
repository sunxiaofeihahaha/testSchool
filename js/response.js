whatScreen();
window.onresize = function () {
	whatScreen();
};

function whatScreen() {
	var width = document.querySelector("html").offsetWidth;
	if (width <= 1200) {
		$(".mobile-photo").show();
		$(".m-hide").hide();
	}
}
