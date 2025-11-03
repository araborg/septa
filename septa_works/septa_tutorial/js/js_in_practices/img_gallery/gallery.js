const thumbnails = document.querySelectorAll(".thumbnail");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

thumbnails.forEach((thumbnail) => {
	thumbnail.addEventListener("click", () => {
		modalImage.src = thumbnail.src.replace("/100/100", "/500/500");

		modal.style.display = "flex";
	});
});

modal.addEventListener("click", () => {
	modal.style.display = "none";
});
