document.getElementById("getWeather").addEventListener("click", async () => {
	const city = document.getElementById("city").value;
	const apiKey = "YOUR_API_KEY";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error("City not found");
		}

		const data = await response.json();

		displayWeather(data);
	} catch (error) {
		document.getElementById("weather").textContent = error.message;
	}
});

function displayWeather(data) {
	const weatherDiv = document.getElementById("weather");
	weatherDiv.textContent = `The weather in ${data.name} is ${data.weather[0].description} with a temperature of ${data.main.temp}°C.`;
}
