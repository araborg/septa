const lightBtn = document.querySelector("#light");
const darkBtn = document.querySelector("#dark");

const body = document.querySelector("body");

lightBtn.addEventListener("click", handleClick);

function handleClick(e) {
	e.preventDefault();

	console.log(this);
}
