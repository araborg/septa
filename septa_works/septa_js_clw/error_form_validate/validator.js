const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();

	try {
		validateForm();

		alert("Form submitted successfully!");
	} catch (error) {
		alert("Form submission failed: " + error.message);
	}
}

function validateForm() {
	let username = document.getElementById("username").value.trim();
	let email = document.getElementById("email").value.trim();

	if (!username) {
		throw new Error("Username is required");
	}
}
