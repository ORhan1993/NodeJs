// Node program to demonstrate the 
// buffer.readIntLE( offset, bytelen ) method 
const buff = Buffer.from([0x11, 0x12, 0x34, 0x56, 0x89, 0xcd]); 

console.log(buff.readIntLE(4, 6).toString(16)); 

console.log(buff.readIntLE(3, 0).toString(16)); 
