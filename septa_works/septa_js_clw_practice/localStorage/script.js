const lightBtn = document.querySelector("#light");
const darkBtn = document.querySelector("#dark");

lightBtn.addEventListener("click", handleClick.bind(this));
darkBtn.addEventListener("click", handleClick.bind(this));

function handleClick(arg) {
	const selectedTheme = arg.target.id;

	console.log(selectedTheme);
}
