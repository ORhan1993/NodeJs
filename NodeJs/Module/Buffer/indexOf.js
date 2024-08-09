// Node.js program to demonstrate the 
// Buffer.indexOf() method 
	
// Creating a buffer 
const buffer = Buffer.from( 
	'GeeksforGeeks: A computer science portal'); 

const output = buffer.indexOf('computer'); 
// Returns the starting index value of the string we are looking for in the array.
console.log(output); 
