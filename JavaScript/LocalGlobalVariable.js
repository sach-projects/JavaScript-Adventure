
let func = function(num1,num2,num3=1/*default variable*/){
            let local = "Rushya"  //local variable
            console.log(`Hello ${global}`);
            console.log(`Hello ${local}`);
            console.log(`${num1} + ${num2} + ${num3} =`);
            return num1 + num2 + num3;
}

let global = "Sachin" //global variable

console.log(func(4,5,6));
console.log(func(4,5));

/*
Output:
Hello Sachin
Hello Rushya
4 + 5 + 6 =
15
Hello Sachin
Hello Rushya
4 + 5 + 1 =
10
*/
