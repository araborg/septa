document.getElementById("addItem").addEventListener("click", () => {
	const itemList = document.getElementById("itemList");
	const fragment = document.createDocumentFragment();

	for (let i = 0; i < 1000; i++) {
		const listItem = document.createElement("li");
		listItem.textContent = `Item ${i}`;
		fragment.appendChild(listItem);
	}

	itemList.appendChild(fragment); // Batch DOM updates
});

// Efficient event handling with throttling
function throttle(fn, limit) {
	let lastCall = 0;
	return function (...args) {
		const now = Date.now();
		if (now - lastCall >= limit) {
			lastCall = now;
			fn.apply(this, args);
		}
	};
}

window.addEventListener(
	"resize",
	throttle(() => {
		console.log("Window resized");
	}, 200)
);
