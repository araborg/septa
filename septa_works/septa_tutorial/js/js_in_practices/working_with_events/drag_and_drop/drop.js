const draggable = document.getElementById("draggable");
const dropzone = document.getElementById("dropzone");
const target = document.getElementById("target");

// Handle drag start event
draggable.addEventListener("dragstart", (e) => {
	e.dataTransfer.setData("text/plain", "Dragged element");
});

// Handle drag over event
dropzone.addEventListener("dragover", (e) => {
	e.preventDefault(); // Allow drop
	dropzone.style.backgroundColor = "#e0e0e0";
});

dropzone.addEventListener("dragleave", () => {
	dropzone.style.backgroundColor = "";
});

// Handle drop event
dropzone.addEventListener("drop", (e) => {
	e.preventDefault();
	dropzone.style.backgroundColor = "";
	const data = e.dataTransfer.getData("text");
	dropzone.textContent = `Dropped: ${data}`;
});
