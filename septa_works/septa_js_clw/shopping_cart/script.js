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
