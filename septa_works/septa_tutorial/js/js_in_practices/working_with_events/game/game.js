document.addEventListener("DOMContentLoaded", () => {
	const gameArea = document.getElementById("gameArea");
	const target = document.getElementById("target");
	const scoreElement = document.getElementById("score");

	let score = 0;

	function moveTarget() {
		const maxX = gameArea.clientWidth - target.offsetWidth;
		const maxY = gameArea.clientHeight - target.offsetHeight;
		const randomX = Math.floor(Math.random() * maxX);
		const randomY = Math.floor(Math.random() * maxY);

		target.style.left = `${randomX}px`;
		target.style.top = `${randomY}px`;
	}

	target.addEventListener("click", () => {
		score += 1;
		scoreElement.textContent = `Score: ${score}`;
		moveTarget();
	});

	moveTarget(); // Initial position
});
