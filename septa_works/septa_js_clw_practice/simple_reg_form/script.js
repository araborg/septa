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

	console.log(userValue, emailValue, passValue);
}
