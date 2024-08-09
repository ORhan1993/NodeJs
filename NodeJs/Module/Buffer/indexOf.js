// Node.js program to demonstrate the 
// Buffer.indexOf() method 
	
// Creating a buffer 
const buffer = Buffer.from( 
	'Software is not just coding.'); 

const output = buffer.indexOf('coding'); 
// Returns the starting index value of the string we are looking for in the array.
console.log(output); 
