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

export { addItem, removeItem, calculateTotal };

const addItem = (cart, item) => [...cart, item];

const removeItem = (cart, itemName) =>
	cart.filter((item) => item.name !== itemName);

const calculateTotal = (cart) =>
	cart.reduce((total, item) => total + item.price, 0);
