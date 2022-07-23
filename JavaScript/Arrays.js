/*A single Js Array can consist of different type of values
like number,string,objects,functions*/

//declaration of an array

  //Empty arrays
  let array0 = new Array();
  let array1 = [];

  //Array containing set of similar data types
  let array2 = ["Sachin","Rushi","Chetan"];
  let array3 = [1,2,3];
  let array4 = [{name:"Sachin",surname:"Patil"},{name:"Rushi",surname:"Patil"}]
  let array5 = [function(){console.log("Hello World");},function(){console.log("Hello Alien");}];

  //Array containing different types of data types or objects
   let masterArray = ["Sachin",1,{name:"Sachin",surname:"Patil"},function(){console.log("Hello World");}];

   //to call functions defined in an array
   masterArray[3]();
   //Hello World
//array operations

  let array = [1,2,4,6,3,7,8,9]

  //Push : Adds given value/values to the end of an array
  console.log(array.push(10));// prints the length of array after insertion
  //9
  console.log(array.push(5,10));
  //11
  console.log(`Array ${array}`);
  //Array 1,2,4,6,3,7,8,9,10,5,10

  //Pop : Removes value from the end of an array
  console.log(array.pop()); //prints the element that was popped
  //10
  console.log(`Array ${array}`);
  //Array 1,2,4,6,3,7,8,9,10,5,10

  /*Splice : Removes elements from given index  to given index in first
   two parameters and adds whatever numbers given as further parameters*/
   console.log(array.splice(1,4,13,15,17)) // returns array of removed elements
   //[ 2, 4, 6, 3 ]
   console.log(`Array ${array}`);
   //Array 1,13,15,17,7,8,9,10,5
/*
Output:
Hello World
9
11
Array 1,2,4,6,3,7,8,9,10,5,10
10
Array 1,2,4,6,3,7,8,9,10,5
[ 2, 4, 6, 3 ]
Array 1,13,15,17,7,8,9,10,5
*/
