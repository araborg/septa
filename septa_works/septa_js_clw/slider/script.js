const slides = document.querySelectorAll(".slide");

document.getElementById("next").addEventListener("click", () => {
	changeSlide(1);
});

document.getElementById("prev").addEventListener("click", () => {
	changeSlide(-1);
});

let currentSlide = 0;
const totalSlides = slides.length;

console.log(slides);

function changeSlide(direction) {
	slides[currentSlide].style.display = "none";

	currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

	slides[currentSlide].style.display = "block";
}

slides[currentSlide].style.display = "block";
