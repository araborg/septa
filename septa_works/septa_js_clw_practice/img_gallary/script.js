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

const featuredImg = document.querySelector("#feature");
const thumbnails = document.querySelector(".thumbnails");
// console.log(thumbnails);

const thumbnail = document.querySelector(".thumbnail");
// console.log(thumbnail);

const handleClick = (e) => {
	console.log(e.target);
};

thumbnail.addEventListener("click", handleClick);
