const ligthThemeButton = document.querySelector("#lightTheme");
const darkThemeButton = document.getElementById("darkTheme");

// init and apply stored theme on pg load
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
	document.body.className = savedTheme;
}

const handleTheme = (currentTheme) => {
	document.body.className = currentTheme;

	localStorage.setItem("theme", currentTheme);
};

// Event listeners for theme buttons
ligthThemeButton.addEventListener("click", handleTheme.bind("light-theme"));

darkThemeButton.addEventListener("click", handleTheme.bind("dark-theme")));
