// "https://jsonplaceholder.typicode.com/users";

const items = document.querySelector("#items");
const btn = document.querySelector("button");
console.log(btn);

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
	let numItem = 3;

	console.log(numItem);

	const dataToShow = data.splice(0, numItem);

	dataToShow.map((el) => updateUI(el));

	numItem += 3;
}

btn.addEventListener("click", usersMethod);

function updateUI(elem) {
	const div = document.createElement("div");
	div.className = "inner-container";

	const li1 = document.createElement("li");
	const li2 = document.createElement("li");
	const li3 = document.createElement("li");
	const li4 = document.createElement("li");
	const li5 = document.createElement("li");
	const li6 = document.createElement("li");
	const li7 = document.createElement("li");

	li1.textContent = elem.name;
	li2.textContent = elem.email;
	li3.textContent = elem.username;
	li4.textContent = elem.phone;
	li5.textContent = elem.website;
	li6.textContent = elem.address.suite;
	li7.textContent = elem.address.city;

	div.appendChild(li1);
	div.appendChild(li2);
	div.appendChild(li3);
	div.appendChild(li4);
	div.appendChild(li5);
	div.appendChild(li6);
	div.appendChild(li7);

	items.appendChild(div);
}
