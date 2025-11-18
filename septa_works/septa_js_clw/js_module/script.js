// Function Expressions:
const myModule = (function () {
	let privateVariable = "I am private";

	function privateMethod() {
		console.log(privateVariable);
	}

	return {
		publicMethod: function () {
			privateMethod();
		},
	};
})();
