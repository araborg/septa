const multiply = require("./index");

test("multiplies 2 * 3 to equal 6", () => {
	expect(multiply(2, 3)).toBe(6);
});

test("throws an error when non-number arguments are provided", () => {
	expect(() => multiply(2, "three")).toThrow(
		"Both arguments must be numbers"
	);
});
