// Basic Fetch Example

fetch("https://jsonplaceholder.typicode.com/posts")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) =>
		console.error("There was a problem with the fetch operation:", error)
	);

// Displaying API Data
fetch("https://jsonplaceholder.typicode.com/posts")
	.then((res) => res.json())
	.then((users) => {
		users.forEach((user) => {
			console.log(`${user.id} ${user.title}`);
		});
	})
	.catch((error) => console.log("Error: ", error));
