const ligthThemeButton = document.querySelector("#light-theme");
const darkThemeButton = document.getElementById("dark-theme");

const handleTheme = (currentTheme) => {
	document.body.className = currentTheme.target.id;

	localStorage.setItem("theme", currentTheme.target.id);
};

// Event listeners for theme buttons
ligthThemeButton.addEventListener("click", handleTheme.bind(this.id));

darkThemeButton.addEventListener("click", handleTheme.bind(this.id));

// init and apply stored theme on pg load
const onLoadPage = () => {
	// get d stored theme
	const savedTheme = localStorage.getItem("theme");

	if (savedTheme) {
		document.body.className = savedTheme;
	}
};

onLoadPage();
