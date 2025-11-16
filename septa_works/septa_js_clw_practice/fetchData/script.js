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

		usersMethod(users);
	} catch (error) {
		console.error("Error: ", error);
	}
}

fetchUser();

function usersMethod(data) {
	console.log(data);

	data.map((el) => updateUI(el));
}

function updateUI(elem) {
	console.log(el);
}
