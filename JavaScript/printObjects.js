/* assignment : Print all properties of laptop object */
let alien = {
  name : "Sachin",
  tech : "JS",
  laptop :{
    cpu : "i5",
    ram : 4,
    model : "Lenovo"
  }
}

for (let key in alien.laptop)
  console.log(key,alien.laptop[key]);

/* Output :
cpu i5
ram 4
model Lenovo
*/
