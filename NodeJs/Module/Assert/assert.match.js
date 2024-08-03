// Requiring the module
const assert = require('assert').strict;
	
// Function call
try {
	assert.match('I am good', /good/);
	console.log("No Error Occurred")
} catch(error) {
	console.log("Error:", error)
}
