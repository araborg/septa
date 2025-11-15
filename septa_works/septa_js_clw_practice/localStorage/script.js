const lightBtn = document.querySelector("#light");
const darkBtn = document.querySelector("#dark");

const body = document.querySelector("body");

lightBtn.addEventListener("click", handleClick.bind(this));
darkBtn.addEventListener("click", handleClick.bind(this));

function handleClick(param) {
	// e.preventDefault();

	console.log(param.target.id);
}
