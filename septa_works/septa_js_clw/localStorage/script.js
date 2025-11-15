const ligthThemeButton = document.querySelector("#light-theme");
const darkThemeButton = document.getElementById("dark-theme");

const handleTheme = (currentTheme) => {
	const chosenTheme = currentTheme.target.id.split("-")[0];

	// ds rep className wc r .light & .dark
	document.body.className = chosenTheme;

	localStorage.setItem("theme", currentTheme.target.id);
};

// Event listeners for theme buttons
ligthThemeButton.addEventListener("click", handleTheme.bind(this.id));

darkThemeButton.addEventListener("click", handleTheme.bind(this.id));

// init and apply stored theme on pg load
const onLoadPage = () => {
	// get d stored theme class name
	const savedTheme = localStorage.getItem("theme").split("-")[0];

	if (savedTheme) {
		document.body.className = savedTheme;
	}
};

onLoadPage();
