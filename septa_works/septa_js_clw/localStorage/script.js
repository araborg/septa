const ligthThemeButton = document.querySelector("#light-theme");
const darkThemeButton = document.getElementById("dark-theme");
console.log(ligthThemeButton, darkThemeButton);

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
ligthThemeButton.addEventListener("click", handleTheme.bind(this.id));

darkThemeButton.addEventListener("click", handleTheme.bind(this.id));
