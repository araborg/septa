const addItem = (cart, item) => [...cart, item];

const removeItem = (cart, itemName) =>
	cart.filter((item) => item.name !== itemName);

const calculateTotal = (cart) =>
	cart.reduce((total, item) => total + item.price, 0);

export { addItem, removeItem, calculateTotal };
