// Node.js program to demonstrate the 
// buffer.readUInt8() method 
const ob1 = Buffer.from([0X32, 0X44, 0X48]); 

// It returns the first value 
console.log(ob1.readUInt8(0)); 

// It returns the third value 
console.log(ob1.readUInt8(2)); 
const t = Buffer.from("abc"); 

// It returns the ASCII value of 'a' 
console.log(t.readUInt8(0)); 
