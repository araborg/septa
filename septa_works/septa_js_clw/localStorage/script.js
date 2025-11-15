const ligthThemeButton = document.querySelector("lightTheme");
const darkThemeButton = document.querySelector("darkTheme");

// init and apply stored theme on pg load
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
	document.body.className = savedTheme;
}

// Event listeners for theme buttons
ligthThemeButton.addEventListener("click", () => {
	document.body.className = "light-theme";

	localStorage.setItem("theme", "light-theme");
});

darkThemeButton.addEventListener("click", () => {
	document.body.className = "dark-theme";

	localStorage.setItem("theme", "dark-theme");
});
