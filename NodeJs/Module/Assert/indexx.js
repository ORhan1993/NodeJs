// Requiring the module
const assert = require('assert').strict;
	
// Function call
try {
	assert.deepStrictEqual({ a: 1 }, { a: '1' });
} catch(error) {
	console.log("Error: ", error)
}
