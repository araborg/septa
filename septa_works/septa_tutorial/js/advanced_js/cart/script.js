class Item {
	constructor(name, price) {
		this.name = name;

		this.price = price;
	}

	display() {
		return `${this.name}: $${this.price}`;
	}
}

class ShoppingCart {
	constructor() {
		this.items = [];
	}

	addItem(item) {
		this.items.push(item);

		this.displayCart();
	}

	displayCart() {
		const cartItems = document.getElementById("cartItems");

		cartItems.innerHTML = "";

		this.items.forEach((item) => {
			let listItem = document.createElement("li");

			listItem.textContent = item.display();

			cartItems.appendChild(listItem);
		});
	}
}

const cart = new ShoppingCart();

document.getElementById("addItem").addEventListener("click", () => {
	let newItem = new Item("Apple", 0.99);

	cart.addItem(newItem);
});
