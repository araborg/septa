function fetchData(callback) {
	setTimeout(() => {
		const data = { id: 1, name: "John Doe" };

		callback(data);
	}, 2000);
}

function displayData(data) {
	console.log("Data received", data);
}

// displayData serves as d callback fxn parameter
fetchData(displayData);
