/*
Regex email pattern:
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

*/

const form = document.querySelector("form");

const username = document.querySelector("#username");
const useremail = document.querySelector("#useremail");
const password = document.querySelector("#userpassword");

const errorMsg = document.querySelector(".error");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
	e.preventDefault();

	const userValue = username.value;
	const emailValue = useremail.value;
	const passValue = password.value;

	let isValid = true;

	if (!userValue) {
		errorMsg.textContent = "Name is required";
		isValid = false;
	}

	if (!emailValue || !emailValue.contains("@")) {
		errorMsg.textContent = "Enter a valid email";
		isValid = false;
	}

	console.log(userValue, emailValue, passValue);
}
