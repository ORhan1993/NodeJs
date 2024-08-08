// Node.js program to demonstrate the
// Buffer.compare() Method

// Creating a buffer
const buffer1 = Buffer.from('Geek');
const buffer2 = Buffer.from('Geek');
const op = Buffer.compare(buffer1, buffer2);
console.log('Doğru ise : '+op);

const buffer3 = Buffer.from('GFG');
const buffer4 = Buffer.from('Python');
const op1 = Buffer.compare(buffer3, buffer4);
console.log('Farklı ise : '+op1);
