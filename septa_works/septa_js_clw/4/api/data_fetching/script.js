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

// Handling Different Status Codes
fetch("https://jsonplaceholder.typicode.com/posts")
	.then((res) => {
		// if else blk
		if (res.ok) {
			return res.json();
		} else if (res.status === 404) {
			throw new Error("Resource not found (404)");
		} else {
			throw new Error("Something went wrong");
		}
	})
	.then((data) => console.log(data))
	.catch((error) => console.error("Error: ", error));
