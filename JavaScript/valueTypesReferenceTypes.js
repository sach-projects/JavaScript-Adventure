// int number are  value types i.e. value would be copied

let i = 7;
let h = i;
i = 67;
console.log(i,h);

//arrays and objects are reference types i.e. reference would be copied
// meaning copied objects will also get updated if main object is updated

let person = {
    name:"Sachin",
    age:"23"
}

let anotherPerson = person;
person.name = "Rishi";
//anotherPerson.name = "Sachin";
console.log("assigning: ",person,anotherPerson);

let anotherUniquePerson ={
    ...person
}
person.name = "Vivek";
console.log("spreading: ",person,anotherUniquePerson);
