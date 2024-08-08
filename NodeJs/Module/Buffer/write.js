// Node.js program to demonstrate the 
// Buffer.write() method 

// Create a buffer 
const buf = Buffer.allocUnsafe(100); 

const len = buf.write('GeeksforGeeks', 2, 5, 'utf8'); 

console.log(len.toString()); 

console.log(buf);

