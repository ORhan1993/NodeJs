// Node.js program to demonstrate the
// Buffer.compare() Method

// Creating a buffer
const buffer1 = Buffer.from('Soft');
const buffer2 = Buffer.from('Soft');
const op = Buffer.compare(buffer1, buffer2);
console.log('Doğru ise : '+op);

const buffer3 = Buffer.from('Soft');
const buffer4 = Buffer.from('Hard');
const op1 = Buffer.compare(buffer3, buffer4);
console.log('Farklı ise : '+op1);
