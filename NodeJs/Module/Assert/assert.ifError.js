// Requiring the module
const assert = require('assert').strict;

// Function call
try {
	assert.ifError(null);
	console.log("No Error Occurred")
} catch(error) {
	console.log("Error:", error)
}
