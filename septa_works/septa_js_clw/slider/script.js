const slides = document.querySelectorAll(".slide");

document.getElementById("next").addEventListener("click", () => {
	changeSlide(1);
});

document.getElementById("prev").addEventListener("click", () => {
	changeSlide(-1);
});

let currentSlide = 0;
const totalSlides = slides.length;

function changeSlide(direction) {
	slides[currentSlide].style.display = "none";

	console.log({ currentSlide, direction, totalSlides });

	currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
	console.log(`currentSlid after calculation: ${currentSlide}`);

	slides[currentSlide].style.display = "block";
}

slides[currentSlide].style.display = "block";
