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

console.log(dog.eats); // true

dog.sleep(); // The animal is sleeping
