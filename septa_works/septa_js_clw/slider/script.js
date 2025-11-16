const slides = document.querySelectorAll(".slide");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentSlide = 0;
const totalSlides = slides.length;

// Initialize the slider by showing the first slide
slides[currentSlide].style.display = "block";

function changeSlide(direction) {
	slides[currentSlide].style.display = "none";

	console.log({ currentSlide, direction, totalSlides });

	currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
	console.log(`currentSlid after calculation: ${currentSlide}`);

	slides[currentSlide].style.display = "block";
}

prevBtn.addEventListener("click", () => {
	changeSlide(-1);
});

nextBtn.addEventListener("click", () => {
	changeSlide(1);
});
