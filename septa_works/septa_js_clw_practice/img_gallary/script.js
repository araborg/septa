/*
Regex email pattern:
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

*/

// bigger img
const featuredImg = document.querySelector("#featured");

// thumbnails container
const thumbnails = document.querySelector(".thumbnails");

const handleClick = (e) => {
	if (e.target.classList.contains("thumbnail")) {
		featuredImg.src = e.target.src.replace("100/100", "500/500");
	}
};

// add addEventListener to d container & nt individual smaller img
thumbnails.addEventListener("click", handleClick);
