document
	.getElementById("registrationForm")
	.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent form submission

		try {
			validateForm();
			alert("Form submitted successfully!");
		} catch (error) {
			alert("Form submission failed: " + error.message);
		}
	});

function validateForm() {
	let username = document.getElementById("username").value.trim();
	let email = document.getElementById("email").value.trim();

	if (!username) {
		throw new Error("Username is required.");
	}

	if (!email) {
		throw new Error("Email is required.");
	}

	if (!validateEmail(email)) {
		throw new Error("Invalid email format.");
	}
}

function validateEmail(email) {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	return emailPattern.test(email);
}
