//... is spread/rest operator
//spread
const arr = [1,2,3];
const newArr = [...arr,4,5]
console.log(newArr);

const person = {
    name : "sachin",
    age : 23,
    gender : "male"
}

const characteristics = {
    ...person,
    character:"lazy"
} 
console.log(person,characteristics);

//rest
const filtr = (...args)=>{
    return args;
}
console.log(filtr(1,2,5,7,3));