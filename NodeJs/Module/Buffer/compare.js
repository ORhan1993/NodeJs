/*// Node.js program to demonstrate the
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
*/

// Node.js program to demonstrate the
// Buffer.compare() Method

// Creating a buffer
const buffer1 = Buffer.from('2');
const buffer2 = Buffer.from('1');
const buffer3 = Buffer.from('3');
const array = [buffer1, buffer2, buffer3];

// Before sorting
console.log('Sıralamdan Önce '+array);

// After sorting array
console.log('Sıralamadan Sonra '+array.sort(Buffer.compare));
