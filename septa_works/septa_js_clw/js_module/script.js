// Function Expressions:
const myModule = (function () {
	// declare private variable
	let privateVariable = "I am private";

	// use d private variable inside a fxn
	function privateMethod() {
		console.log(privateVariable);
	}

	return {
		// access d private method inside anoda method
		publicMethod: function () {
			privateMethod();
		},
	};
})();

// myModule.privateMethod is not a function
// myModule.privateMethod();

myModule.publicMethod();
