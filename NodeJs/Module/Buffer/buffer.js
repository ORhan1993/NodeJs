// Node.js program to demonstrate the
// Buffer.copy() Method

// Creating a buffer
let buffer2 = Buffer.from('Boz');

let buffer1 = Buffer.from('Orhan    geyik');

buffer2.copy(buffer1, 6, 0);

console.log(buffer1.toString());

