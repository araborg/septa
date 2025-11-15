const lightBtn = document.querySelector("#light");
const darkBtn = document.querySelector("#dark");

lightBtn.addEventListener("click", handleClick.call(this));
darkBtn.addEventListener("click", handleClick.call(this));

function handleClick() {
	console.log(this);
}
