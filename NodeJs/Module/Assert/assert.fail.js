// Requiring the module 
const assert = require('assert').strict; 

// Function call 
try { 
	assert.fail(new TypeError('My custom defined error Benim Hatam :D :D')); 
} catch(error) { 
	console.log("Error:", error) 
} 
