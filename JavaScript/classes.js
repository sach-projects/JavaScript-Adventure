//Old syntax 
class Human{
    constructor(){
        this.gender = "male";
    }
    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor(){
        super();
        this.name = "Sachin";
    }
    printName(){
        console.log(this.name);
    }
}

const person1 = new Person();
console.log(person1);
person1.printName();
person1.printGender();
console.log("executed");