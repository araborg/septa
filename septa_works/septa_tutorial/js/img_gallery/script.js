const featured = document.getElementById("featured");
const thumbnails = document.getElementById("thumbnails");

function changeImage(event) {
	// thumbnail: rep individual smaller img
	if (event.target.classList.contains("thumbnail")) {
		// "100/100": rep smaller img (thumbnail) width & height
		// "500/500": rep bigger img (featured) width & height
		featured.src = event.target.src.replace("100/100", "500/500");
	}
}
// smaller imgs container
thumbnails.addEventListener("click", changeImage);

featured.addEventListener("mouseenter", function () {
	this.style.opacity = "0.7";
});

featured.addEventListener("mouseleave", function () {
	this.style.opacity = "1";
});
