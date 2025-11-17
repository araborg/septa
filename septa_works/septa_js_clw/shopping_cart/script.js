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

class Item {
	constructor(name, price) {
		this.name = name;

		this.price = price;
	}

	display() {
		return `${this.name}: ${this.price}`;
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

const btn = document.getElementById("addItem");

btn.addEventListener("click", () => {
	let newItem = new Item("Apple", 0.99);

	cart.addItem(newItem);
});
