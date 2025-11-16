// "https://jsonplaceholder.typicode.com/users";

const items = document.querySelector("#items");

async function fetchUser() {
	try {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/users"
		);

		if (!response.ok) {
			console.log("Response is currently unavailable");
		}

		const users = await response.json();

		updateUI(users);
	} catch (error) {
		console.error("Error: ", error);
	}
}

function updateUI(data) {
	console.log(data);
}

fetchUser();
