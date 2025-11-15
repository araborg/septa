/*
For revision: imgs links
<img src="https://picsum.photos/id/1/500/500" alt="Featured Image" id="featured">
<img src="https://picsum.photos/id/1/100/100" alt="Thumbnail 1" class="thumbnail">
<img src="https://picsum.photos/id/2/100/100" alt="Thumbnail 2" class="thumbnail">
<img src="https://picsum.photos/id/3/100/100" alt="Thumbnail 3" class="thumbnail">
<img src="https://picsum.photos/id/4/100/100" alt="Thumbnail 4" class="thumbnail">


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
