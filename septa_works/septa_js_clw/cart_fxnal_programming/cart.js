/*
function makeCounter() {
	let count = 0;

	return function () {
		count++;

		return count;
	};
}

const counter = makeCounter();

console.log(counter());
console.log(counter());


*/

const addItem = (cart, item) => [...cart, item];

const removeItem = (cart, itemName) =>
	cart.filter((item) => item.name !== itemName);
