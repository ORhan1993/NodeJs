// Requiring the module
const assert = require('assert').strict;

// Function call
try {
	assert.strictEqual(5, 5);
	console.log("No Error Occurred");
} catch (error) {
	console.log("Error: ", error)
}

// Function call
try {
	assert.strictEqual(2, 5, new
		TypeError('Inputs are not same'));
} catch (error) {
	console.log("Error Occurred: ", error)
}
