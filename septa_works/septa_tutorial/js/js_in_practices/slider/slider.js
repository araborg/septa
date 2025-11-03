let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

document.getElementById("next").addEventListener("click", () => {
	changeSlide(1);
});

document.getElementById("prev").addEventListener("click", () => {
	changeSlide(-1);
});

function changeSlide(direction) {
	slides[currentSlide].style.display = "none";

	currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

	slides[currentSlide].style.display = "block";
}

// Initialize the slider by showing the first slide
slides[currentSlide].style.display = "block";
