const slides = document.querySelectorAll(".slide");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", () => {
	changeSlide(1);
});

prevBtn.addEventListener("click", () => {
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
