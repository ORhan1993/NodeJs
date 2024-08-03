// Requiring the module 
const assert = require('assert').strict; 

// Function call 
(async () => { 
	assert.strictEqual(1,1) 
	await assert.rejects( 
	async () => { 
		throw new TypeError('Wrong value'); 
	}, 
	(err) => { 
		assert.strictEqual(err.name, 'TypeError'); 
		assert.strictEqual(err.message, 'Wrong value'); 
		return true; 
	} 
	).then(() => { 
		console.log("Reject Demo Works Successfully") 
	}); 
})(); 
