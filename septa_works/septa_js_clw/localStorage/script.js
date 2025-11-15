const ligthThemeButton = document.querySelector("lightTheme");
const darkThemeButton = document.querySelector("darkTheme");

// init and apply stored theme on pg load
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
	document.body.className = savedTheme;
}
