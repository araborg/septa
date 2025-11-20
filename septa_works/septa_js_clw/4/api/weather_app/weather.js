const btn = document.getElementById("getWeather");

btn.addEventListener("click", handleClick);

async function handleClick() {
	const city = document.getElementById("city").value;

	const apiKey = "153df05654d929db48d25ef6c16f2b9a";

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	console.log(url);
	// api.openweathermap.org/data/2.5/weather?q=london&appid=153df05654d929db48d25ef6c16f2b9a&units=metric
	https: try {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error("City not found");
		}

		const data = await response.json();

		console.log(data);
	} catch (error) {
		const showError = document.getElementById("weather");
		showError.textContent = error.message;
	}
}
