import { addItem, removeItem, calculateTotal } from "./cart.js";

let cart = [];

cart = addItem(cart, { name: "Apple", price: 0.99 });
cart = addItem(cart, { name: "Banana", price: 1.29 });

console.log({ cart });

cart = removeItem(cart, "Apple");
console.log({ cart });

const total = calculateTotal(cart);
console.log({ total });
