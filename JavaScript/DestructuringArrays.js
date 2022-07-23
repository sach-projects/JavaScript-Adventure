//Array Destructuring
let a,b,c,d;
let array = [1,2,3,4];

//We can assign multiple array elements to variables as follows
[a,b,c,d] = array;
console.log(`a:${a} b:${b} c:${c} d:${d}`);

//Inorder to skip assignment for an array element we can add an extra comma
[x,y,,z] = array;
console.log(`x:${x} y:${y} z:${z}`);

//To assign some part of array elements as a different Array
[q,r,...e] = array;
console.log(`q:${q} r:${r} e:${e}`);
console.log(e);

//Split function : Will split string into an array with given seprator
let str = "My name is Sachin Patil".split(" ");
console.log(str);
