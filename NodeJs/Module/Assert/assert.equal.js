// Requiring the module
const assert = require('assert').strict;

let a = 20;
let b = 20;

// Function call
try {
	assert.equal(a, b);
	console.log("No Error Occurred")
} catch (error) {
	console.log(" Error:", error)
}
