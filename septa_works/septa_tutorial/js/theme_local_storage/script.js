const lightThemeButton = document.getElementById("lightTheme");
const darkThemeButton = document.getElementById("darkTheme");

// Apply stored theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
	document.body.className = savedTheme;
}

// Event listeners for theme buttons
lightThemeButton.addEventListener("click", () => {
	document.body.className = "light-theme";
	localStorage.setItem("theme", "light-theme");
});

darkThemeButton.addEventListener("click", () => {
	document.body.className = "dark-theme";
	localStorage.setItem("theme", "dark-theme");
});
