/*
Regex email pattern:
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

*/

const form = document.querySelector("form");

const username = document.querySelector("#username");
const useremail = document.querySelector("#useremail");
const password = document.querySelector("#userpassword");

const nameErrorMsg = document.querySelector(".name-error");
const emailErrorMsg = document.querySelector(".email-error");
const passwordErrorMsg = document.querySelector(".password-error");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
	e.preventDefault();

	const userValue = username.value;
	const emailValue = useremail.value;
	const passValue = password.value;

	let isValid = true;

	if (!userValue) {
		nameErrorMsg.textContent = "Name is required";
		// isValid = false;
	}

	if (!emailValue || !emailValue.contains("@")) {
		emailErrorMsg.textContent = "Enter a valid email";
		// isValid = false;
	}

	if (!passValue || passValue.length >= 6) {
		passwordErrorMsg.textContent =
			"Enter a valid passowrd of a length atleast 6";
		// isValid = false;
	}

	console.log(userValue, emailValue, passValue);
}
