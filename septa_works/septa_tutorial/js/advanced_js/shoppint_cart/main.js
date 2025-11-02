import { addItem, removeItem, calculateTotal } from "./cart.js";

let cart = [];

cart = addItem(cart, { name: "Apple", price: 0.99 });
cart = addItem(cart, { name: "Banana", price: 1.29 });

console.log("Cart:", cart); // Output: Cart: [{ name: 'Apple', price: 0.99 }, { name: 'Banana', price: 1.29 }]

cart = removeItem(cart, "Apple");

console.log("Cart after removal:", cart); // Output: Cart after removal: [{ name: 'Banana', price: 1.29 }]

const total = calculateTotal(cart);
console.log("Total:", total); // Output: Total: 1.29
