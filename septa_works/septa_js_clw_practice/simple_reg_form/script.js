/*
Regex email pattern:
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

*/

const form = document.querySelector("form");

console.log(form);

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
	e.preventDefault();

	console.log("Clicked");
}
