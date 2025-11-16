// "https://jsonplaceholder.typicode.com/users";

const items = document.querySelector("#items");
console.log(items);

async function fetchUser() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");

	if (!response.ok) {
		console.log("Response is currently unavailable");
	}

	const users = await response.json();

	updateUI(users);
}

function updateUI(data) {
	data.map((el) => {
		const li = document.createElement("li");
		li.textContent = el.name;
	});
}

fetchUser();
