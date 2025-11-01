async function fetchUserData() {
	try {
		let response = await fetch(
			"https://jsonplaceholder.typicode.com/users"
		);

		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}

		let users = await response.json();

		displayUsers(users);
	} catch (error) {
		console.error("Error:", error);
	}
}

function displayUsers(users) {
	console.log(users);

	const userList = document.getElementById("userList");

	users.forEach((user) => {
		let listItem = document.createElement("li");

		listItem.textContent = `${user.name} (${user.email})`;

		userList.appendChild(listItem);
	});
}

fetchUserData();
