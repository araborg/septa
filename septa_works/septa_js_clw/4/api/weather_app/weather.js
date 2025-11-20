const btn = document.getElementById("getWeather");

btn.addEventListener("click", handleClick);

async function handleClick() {
	const city = document.getElementById("city").value;

	const apiKey = "153df05654d929db48d25ef6c16f2b9a";
	// const apiKey = "153df05654d929db48d25ef6c16f2b9a";

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	// https: api.openweathermap.org/data/2.5/weather?q=london&appid=153df05654d929db48d25ef6c16f2b9a&units=metric

	try {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error("City not found");
		}

		const data = await res.json();

		displayWeather(data);
	} catch (error) {
		const showError = document.getElementById("weather");
		showError.textContent = error.message;
	}

	city.value = "";
}

function displayWeather(data) {
	console.log(data);

	const weatherDiv = document.getElementById("weather");

	weatherDiv.textContent = `The weather in ${data.name} is ${data.weather[0].description} 
        with a temperature of ${data.main.temp}°C.`;
}
