const ws = new WebSocket("ws://localhost:8080");

ws.onopen = () => {
	console.log("Connected to the server");
};

ws.onmessage = (event) => {
	const chat = document.getElementById("chat");
	const message = document.createElement("p");

	message.textContent = event.data;

	chat.appendChild(message);
};

ws.onclose = () => {
	console.log("Disconnected from the server");
};

document.getElementById("send").addEventListener("click", () => {
	const input = document.getElementById("message");
	ws.send(input.value);

	input.value = "";
});
