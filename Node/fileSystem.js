var fs = require('fs');
const { isNullOrUndefined } = require('util');

//write into a file
fs.writeFile("dummy.txt","Dummy was created",function(error){
    console.log("Dummy was created");
});

//Read from the file
fs.readFile("dummy.txt","utf-8",function(error,data){
    console.log(`Dummy was accessed - ${data}`);
});

//Delete a file
fs.unlink("dummy.txt",function(){
    console.log("Dummy is no more :(");
});