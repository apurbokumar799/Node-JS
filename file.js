const fs = require('fs');


//sync means synchronous
//async means asynchronous
//writeFileSync is a synchronous function that writes to a file
//writeFileSync has two arguments: the file path and the data to write
//The following snippet writes the string "Hello, World!" to a file named test.txt:
//fs.writeFileSync("test.txt", "Hello, World!");
//The following snippet writes the string "Hello, World!" to a file named test.txt:

//sync file write
//fs.writeFileSync("test.txt", "Hello, World!");

//sync file read
const data = fs.readFileSync("test.txt", "utf-8")
