// Requiring the module 
const assert = require('assert').strict; 
	
// Function call 
try { 
	assert.notDeepEqual({ a: '5' }, { a: '11' }); 
	console.log("No Error Occurred") 
} catch(error) { 
	console.log("Error: ", error) 
} 
