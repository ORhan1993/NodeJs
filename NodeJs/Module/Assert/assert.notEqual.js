// Requiring the module
const assert = require('assert').strict;

let a = 4;
let b = "Four";

// Function call
try {
	assert.notEqual(a, b)
	console.log("No Error Occurred")
} catch (error) {
	console.log("Error: ", error)
}

a = 4;
b = 4;

// Function call
try {
	assert.notEqual(a, b)
} catch (error) {
	console.log("Error: ", error)
}
