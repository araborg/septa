const ligthThemeButton = document.querySelector("#light-theme");
const darkThemeButton = document.getElementById("dark-theme");
console.log(ligthThemeButton, darkThemeButton);

const handleTheme = (currentTheme) => {
	const theme = currentTheme.target.id ? "" : currentTheme.target.id;

	document.body.className = theme;

	localStorage.setItem("theme", theme);
};

// Event listeners for theme buttons
ligthThemeButton.addEventListener("click", handleTheme.bind(this.id));

// darkThemeButton.addEventListener("click", handleTheme.bind(this.id));

// init and apply stored theme on pg load
const onLoadPage = () => {
	// get d stored theme
	const savedTheme = localStorage.getItem("theme");

	if (savedTheme) {
		document.body.className = savedTheme;
	}
};

onLoadPage();
