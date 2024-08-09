// Node.js program to demonstrate the 
// Buffer.allocUnsafeSlow() Method 
	
// Creating a buffer 
const buffer = Buffer.allocUnsafe(4); 
	
// Print: random string everytime we run the 
// program as we have not added 
// anything to the buffer yet 
console.log(buffer.toString()); 

for (let i = 0; i < 4; i++) { 

	//filling the values in buffer 
	buffer[i] = i + 97; 
    console.log(buffer[i]);
} 

// Adds and Print: 'abcd' as 97 98 99 100 101 
// are their respective ASCII values 
console.log(buffer.toString()); 
