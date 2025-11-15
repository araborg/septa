const lightBtn = document.querySelector("#light");
const darkBtn = document.querySelector("#dark");

const paragraph = lightBtn.addEventListener("click", handleClick.bind(this));
darkBtn.addEventListener("click", handleClick.bind(this));

function handleClick(arg) {
	const selectedTheme = arg.target.id;

	document.body.className = selectedTheme;
}
