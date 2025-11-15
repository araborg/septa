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
	console.log("clicked");

	e.preventDefault();

	const userValue = username.value;
	const emailValue = useremail.value;
	const passValue = password.value;

	let isValid = true;

	if (!userValue.trim()) {
		nameErrorMsg.textContent = "Name is required";
		// isValid = false;
	}

	if (!emailValue.trim() || emailValue.includes("@")) {
		// emailErrorMsg.textContent = "Enter a valid email";
		// isValid = false;
	}

	if (!passValue.trim() || passValue.length >= 6) {
		passwordErrorMsg.textContent =
			"Enter a valid passowrd of a length atleast 6";
		// isValid = false;
	}

	// userValue = "";
	// emailValue = "";
	// passValue = "";

	console.log(userValue, emailValue, passValue);
}
