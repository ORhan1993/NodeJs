// Requiring the module 
const assert = require('assert').strict; 

// Function call 
try { 
	assert.ok(typeof 12345 === 'number'); 
	console.log("No error Occurred") 
} catch(error) { 
	console.log("Error: ", error) 
} 

// Function call 
try { 
	assert.ok(typeof 12456 === 'string'); 
} catch(error) { 
	console.log("Error Occurred: ", error) 
}
