const lightBtn = document.querySelector("#light");
const darkBtn = document.querySelector("#dark");

const hiddenPara = document.querySelector("#hidden");

lightBtn.addEventListener("click", handleClick.bind(this));
darkBtn.addEventListener("click", handleClick.bind(this));

function handleClick(arg) {
	const selectedTheme = arg.target.id;

	hiddenPara.textContent = `Theme change to ${selectedTheme}`;
	document.body.className = selectedTheme;
}
