const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (event) {
	event.preventDefault(); // Prevent form submission

	// Clear previous errors
	nameError.textContent = "";
	emailError.textContent = "";
	passwordError.textContent = "";

	// Validate fields
	let isValid = true;

	if (nameInput.value.trim() === "") {
		nameError.textContent = "Name is required.";
		isValid = false;
	}

	if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
		emailError.textContent = "Valid email is required.";
		isValid = false;
	}

	if (passwordInput.value.trim().length < 6) {
		passwordError.textContent =
			"Password must be at least 6 characters long.";
		isValid = false;
	}

	if (isValid) {
		alert("Registration successful!");
		form.reset(); // Reset form fields
	}
});
