// Node.js program to demonstrate the 
// Buffer.writeUInt32BE method 

// Creating a buffer of size 8 
const buffer = Buffer.allocUnsafe(8); 
	
console.log(buffer); 
	
// Out of range error will be thrown 
buffer.writeUInt32BE(0xabcdabcd, 5); 
