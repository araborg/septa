const lightBtn = document.querySelector("#light-theme");
const darkBtn = document.querySelector("#dark-theme");

const hiddenPara = document.querySelector("#hidden");

lightBtn.addEventListener("click", handleClick.bind(this));
darkBtn.addEventListener("click", handleClick.bind(this));

function handleClick(arg) {
	const selectedTheme = arg.target.id.split("-")[0];

	hiddenPara.style.display = "block";
	hiddenPara.textContent = `Theme change to ${selectedTheme}`;
	document.body.className = selectedTheme;

	localStorage.setItem("saveTheme", arg.target.id);
}

const init = () => {
	const savedTheme = localStorage.getItem("saveTheme");

	hiddenPara.style.display = "block";
	hiddenPara.textContent = `Previous theme selected ${savedTheme}`;

	savedTheme && (document.body.className = savedTheme.split("-")[0]);
};

init();
