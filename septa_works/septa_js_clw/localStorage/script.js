const ligthThemeButton = document.querySelector("#light-theme");
const darkThemeButton = document.getElementById("dark-theme");

const handleTheme = (currentTheme) => {
	// get d class name of .light or .dark
	const chosenTheme = currentTheme.target.id.split("-")[0];

	document.body.className = chosenTheme;

	// store d class name with theme variable
	localStorage.setItem("theme", chosenTheme);
};

// Event listeners for theme buttons
ligthThemeButton.addEventListener("click", handleTheme.bind(this.id));

darkThemeButton.addEventListener("click", handleTheme.bind(this.id));

// init and apply stored theme on pg load
const onLoadPage = () => {
	// get d stored theme class name
	const savedTheme = localStorage.getItem("theme");

	if (savedTheme) {
		document.body.className = savedTheme;
	}
};

onLoadPage();
