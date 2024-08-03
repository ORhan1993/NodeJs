// Requiring the module
const assert = require('assert').strict;
		
// Function call
try {
	assert.deepStrictEqual({ a: '5' }, { a: '5' });
	console.log("No Error Occurred")
} catch(error) {
	console.log("Error: ", error)
}
