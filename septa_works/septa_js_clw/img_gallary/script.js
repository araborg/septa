const featured = document.getElementById("featured");
const thumbnails = document.getElementById("thumbnails");

thumbnails.addEventListener("click", handleClick);

function handleClick(event) {
	// console.log(this.id === "thumbnails"); // true

	if (event.target.classList.contains("thumbnail")) {
		featured.src = event.target.src.replace("100/100", "500");
	}

	featured.addEventListener("mouseenter", function () {
		this.style.opacity = "0.7";

		// ds didn't work
		// thumbnails.style.opacity = ".7";
	});

	featured.addEventListener("mouseleave", function () {
		this.style.opacity = "1";

		// ds didn't work
		// thumbnails.style.opacity = "1";
	});
}
