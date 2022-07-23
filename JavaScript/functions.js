/* this is how we define and call a function */

function greet(name){
  return `Hello ${name}`;
}

names = ['sachin','shubham','pratik','pranav','harsh','ashish']

for(let name in names){
  console.log(greet(names[name]));
}

/*
Output:
Hello sachin
Hello shubham
Hello pratik
Hello pranav
Hello harsh
Hello ashish
*/

/* anonymous functions */
/* such a representation is called as a 'function expression' */
let add = function(num1,num2){
  return num1 + num2 ;
}

let result = add(34,89);
console.log(result);
/*
Output:
Hello sachin
Hello shubham
Hello pratik
Hello pranav
Hello harsh
Hello ashish
123
*/
