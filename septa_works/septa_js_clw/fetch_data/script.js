/*
Mimicking asynchronous process

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
// parameter notice d displayData fxn was
// nt called but passed in as a variable
fetchData(displayData);


Promise:
Mimicking a promise


// declare a variable rep a promise
let myPromise = new Promise((resolve, reject) => {
	// let success = true;
	let success = false;

	if (success) {
		// callback
		resolve("Operation successful");
	} else {
		// callback
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


Using async/await:


    
*/

async function fetchData() {
	let response = await fetch("https://api.example.com/data");

	let data = await response.json();

	console.log(data);
}

fetchData();
