const featured = document.getElementById("featured");
const thumbnails = document.getElementById("thumbnails");

thumbnails.addEventListener("click", function (event) {
	if (event.target.classList.contains("thumbnail")) {
		featured.src = event.target.src.replace("100/100", "500/500");
	}
});

featured.addEventListener("mouseenter", function () {
	this.style.opacity = "0.7";
});

featured.addEventListener("mouseleave", function () {
	this.style.opacity = "1";
});
