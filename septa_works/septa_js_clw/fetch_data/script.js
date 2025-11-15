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
*/
