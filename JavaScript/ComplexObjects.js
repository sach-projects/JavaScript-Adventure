/*Complex objects:
  An object containing objects inside it
*/

let alien = {
  name : "Sachin",
  tech : "JS",
  laptop :{
    cpu : "i5",
    ram : 4,
    model : "Lenovo"
  }
}

console.log(alien.laptop.model);
console.log(alien.laptop.model.length);
console.log(alien.laptop.gpu?.length);
/* '?' checks and returns if the property is present in object or not
if it is present it'll return object length else undefined */

/*
Output:
Lenovo
6
undefined
*/

/* delete is used to delete a property*/
 delete alien.laptop.ram ;
 console.log(alien);
 /*
 Output:
 Lenovo
6
undefined
{ name: 'Sachin', tech: 'JS', laptop: { cpu: 'i5', model: 'Lenovo' } }
*/
