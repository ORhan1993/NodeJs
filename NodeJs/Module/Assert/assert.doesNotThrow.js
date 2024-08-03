// Requiring the module 
const assert = require('assert').strict; 

// Function call 
try { 
	assert.doesNotThrow( 
		() => { 
		throw new TypeError('The Wrong value error'); 
		}, 
		/abcd/, 
		'Whoops'
	); 
} catch(error) { 
	console.log("Error:", error) 
} 
