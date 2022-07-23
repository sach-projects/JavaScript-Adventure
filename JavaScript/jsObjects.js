let alien = {
  name : "Sachin",
  tech : "Python",
  "Work Experience" : 6  /*properties with a space would need to be defined under quotes*/
}
/* there are 2 ways to acess properties of an objecct */
console.log(alien);
console.log(alien.name);  /* dot operator*/
console.log(alien.tech);
console.log(alien["Work Experience"]); /*square brackets*/


/*
Output:
{ name: 'Sachin', tech: 'Python', 'Work Experience': 6 }
Sachin
Python
6
*/
