/*
let animal = {
	eats: true,

	sleep() {
		console.log(`The animal is sleeping`);
	},
};

let dog = {
	barks: true,
};

// set animal as d prototype of dog
dog.__proto__ = animal;

// both eats & sleep r inherited 4rm animal obj
console.log(dog.eats); // true

dog.sleep(); // The animal is sleeping

// Using contructor fxn to cr8 instances of obj
function Person(name, age) {
	this.name = name;

	this.age = age;
}

// prototype was used to add method to Person obj
Person.prototype.greet = function () {
	console.log(`Hello, my name is ${this.name}`);
};

let john = new Person("John", 30);
let jane = new Person("Jane", 25);

john.greet(); // Hello, my name is John
jane.greet(); // Hello, my name is Jane

// Inheritance with Constructor Functions:
function Animal(name) {
	this.name = name;
}

Animal.prototype.speak = function () {
	console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
	// Call the parent constructor
	Animal.call(this, name);

	this.breed = breed;
}

class Persons {
	constructor(name, age) {
		this.name = name;

		this.age = age;
	}

	greet() {
		console.log(`Hello, my name is ${this.name}`);
	}
}

const john2 = new Persons("John", 30);
john2.greet(); // Hello, my name is John

class Animals {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(`${this.name} makes a sound.`);
	}
}

class Dogs extends Animals {
	constructor(name, breed) {
		// Call the parent constructor i.e Animals
		super(name);

		this.breed = breed;
	}

	speak() {
		console.log(`${this.name} bark.`);
	}
}

let rex = new Dogs("Rex", "Golden Retriever");
rex.speak(); // Rex bark.

let car = {
	model: "Honda",

	start() {
		console.log(`Starting ${this.model}`);

		// similar to this
		// console.log(`Starting ${car.model}`);
	},
};

car.start(); // Output: Starting Honda

*/

const cartItems = document.getElementById("cartItems");

const btn = document.getElementById("addItem");

// The Item class represents a product in the cart.
class Item {
	constructor(name, price) {
		this.name = name;

		this.price = price;
	}

	// method
	display() {
		return `${this.name}: ${this.price}`;
	}
}

/* The ShoppingCart class manages the list
of items and displays them. */
class ShoppingCart {
	constructor() {
		// products array
		this.items = [];
	}

	displayCart() {
		// with every btn click, a new item is added to this.items
		console.log(this.items);

		/* unordered list or items container returned to empty b4
        showing d initial and new added product */
		cartItems.innerHTML = "";

		this.items.forEach((el) => {
			console.log(el);

			let listItem = document.createElement("li");

			// item.display(): method 4rm Item class
			listItem.textContent = el.display();

			cartItems.appendChild(listItem);
		});
	}

	addItem(item) {
		// ds populates d this.item array
		this.items.push(item);

		this.displayCart();
	}
}

const cart = new ShoppingCart();

btn.addEventListener("click", () => {
	// using Item class
	let newItem = new Item("Apple", 0.99);

	// using ShoppingCart class
	cart.addItem(newItem);
});
