/*
1. Mimicking asynchronous process

function fetchData(callback) {
	setTimeout(() => {
		const data = { id: 1, name: "John Doe" };

		// a fxn inside anoda fxn
		callback(data);
	}, 2000);
}

function displayData(data) {
	console.log("Data received", data);
}

// displayData serves as d callback fxn
// parameter. Notice d displayData fxn was
// nt called but passed in as a variable.

fetchData(displayData);


2. Promise: Mimicking a promise

// declare a variable dt store a promise
let myPromise = new Promise((resolve, reject) => {
	let success = true;

	if (success) {
		// call ds callback
		resolve("Operation successful");
	} else {
		// call ds callback
		reject("Operation failed");
	}
});

myPromise
	.then((message) => {
		// resolve/fulfil
		console.log(message);
	})
	.catch((error) => {
		// reject
		console.log(error);
	});

    
3. Using async/await:

async function fetchData() {
	let response = await fetch("https://api.example.com/data");

	let data = await response.json();

	console.log(data);
}

fetchData();


4. try-catch:

async function fetchData() {
	try {
		let response = await fetch("https://api.example.com/data");

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		let data = await response.json();

		console.log(data);
	} catch (error) {
		console.error("Error fetching data: ", error);
	}
}

fetchData();


5. Using fetch():

fetch("https://api.example.com/data")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		return response.json();
	})
	.then((data) => {
		console.log("Data", data);
	})
	.then((error) => {
		console.log("Error", error);
	});


6. Using Fetch with async/await:

async function fetchData() {
	try {
		let response = await fetch("https://api.example.com/data");

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const data = response.json();
		console.log(data);
	} catch (error) {
		console.error("Error:", error);
	}
}

fetchData();


7. Promise.all() and Promise.race()


*/
