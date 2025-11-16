const slides = document.querySelectorAll(".slide");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// console.log(prevBtn);

let currentSlide = 0;
const totalSlides = slides.length;

// Automatically slide
let initialSlide = 1;

const init = () => {
	// console.log(handleClick());
	// const currentImage = document.querySelector(".current-image");

	// Initialize the slider by showing the first slide
	slides[currentSlide].style.display = "block";

	setInterval(() => {
		changeSlide(initialSlide);

		initialSlide < totalSlides ? initialSlide++ : (initialSlide = 0);
	}, 6000);
};

init();

function changeSlide(direction) {
	slides[currentSlide].style.display = "none";

	// initial values of currentSlide, direction, totalSlides
	console.log({ currentSlide, direction, totalSlides });

	currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

	// d value of currentSlide: wc will be btw 0 - 6
	console.log({ currentSlide });

	slides[currentSlide].style.display = "block";
}

function handleClick(e) {
	btnId = +e.target.id;

	changeSlide(btnId);
}

prevBtn.addEventListener("click", handleClick.bind(this));

nextBtn.addEventListener("click", handleClick.bind(this));
