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
	console.log(elem);

	const div = document.createElement("div");
	div.className = "inner-container";

	const li1 = document.createElement("li");
	const li2 = document.createElement("li");
	const li3 = document.createElement("li");

	li1.textContent = elem.name;
	li2.textContent = elem.email;
	li3.textContent = elem.username;

	items.appendChild(li1);
	items.appendChild(li2);
	items.appendChild(li3);

	div.appendChild(items);
}
