//E6 classes syntax (newer version)
class Human{
    gender = "male";
    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human{
    name = "Sachin";
    printName = () =>{
        console.log(this.name);
    }
}

const person = new Person();
person.printGender();
person.printName();