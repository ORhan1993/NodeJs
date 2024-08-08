/*
// Node.js program to demonstrate the 
// Buffer.subarray() method

// Allocating buffer 
const buf = Buffer.from('GeeksforGeeks', 'ascii');

// Printing original buffer
console.log("Original buffer is: " + buf);

// Cropping buffer, here starting index
// is 5 and ending index is 10
cropped_buf = buf.subarray(5, 10);

// Printing cropped buffer
console.log("Cropped buffer is: " + cropped_buf);

// Modifying cropped buffer
cropped_buf[0] = 70; // F
cropped_buf[1] = 79; // O
cropped_buf[2] = 82; // R

// Printing cropped buffer
console.log("Cropped buffer after modification is: " + cropped_buf);

// Printing original buffer
console.log("Original buffer after modification is: " + buf);
*/

// Node.js program to demonstrate the 
// Buffer.subarray() method

// Allocating buffer 
const buf = Buffer.from('GeeksforGeeks', 'ascii');

// Printing original buffer
console.log("Original buffer is: " + buf);

// Cropping buffer, here starting index
// is -10 and ending index is -1
cropped_buf = buf.subarray(-12, -1);

// Printing cropped buffer
console.log("Cropped buffer is:" + cropped_buf);

// Cropping buffer again, here starting
// index is -10 and ending index is -5
cropped_buf = buf.subarray(-10, -5);

// Printing cropped buffer
console.log("Cropped buffer is: " + cropped_buf);

// Cropping buffer again with no parameter
cropped_buf = buf.subarray();

// Printing cropped buffer
console.log("Cropped buffer is: " + cropped_buf);
