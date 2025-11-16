const slides = document.querySelectorAll(".slide");

document.getElementById("next").addEventListener("click", () => {
	changeSlide(1);
});

document.getElementById("prev").addEventListener("click", () => {
	changeSlide(-1);
});
