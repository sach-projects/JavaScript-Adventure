let a =[1,2,3,4,5,6,7,8]

let sumOfEven = a.filter(n => n % 2) // filter :filter values based on given binary expression/function
                 .map(n => n * 2) // map :map each value to given expression/function
                 .reduce((a,b) => a + b);//reduce :will reduce array to single value according to given expression/function

console.log(`Sum of even : ${sumOfEven}`);

let sumOfOdd = a.filter(n => !(n % 2))
                .map(n => n * 3)
                .reduce((a,b) => a + b);


console.log(`Sum of odd  : ${sumOfOdd}`);
