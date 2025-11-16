// "https://jsonplaceholder.typicode.com/users";

async function fetchUser() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");

	if (!response.ok) {
		console.log("Response is currently unavailable");
	}

	const users = await response.json();

	updateUI(users);
}

function updateUI(data) {
	console.log(data);
}

fetchUser();
