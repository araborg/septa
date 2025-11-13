/*
For revision: imgs links
<img src="https://picsum.photos/id/1/500/500" alt="Featured Image" id="featured">
<img src="https://picsum.photos/id/1/100/100" alt="Thumbnail 1" class="thumbnail">
<img src="https://picsum.photos/id/2/100/100" alt="Thumbnail 2" class="thumbnail">
<img src="https://picsum.photos/id/3/100/100" alt="Thumbnail 3" class="thumbnail">
<img src="https://picsum.photos/id/4/100/100" alt="Thumbnail 4" class="thumbnail">


Regex email pattern:
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

*/

// select form
const form = document.getElementById("registrationForm");

// select inputs
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// select error spans
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	// clear previous errors
	nameError.textContent = "";
	emailError.textContent = "";
	passwordError.textContent = "";
});
