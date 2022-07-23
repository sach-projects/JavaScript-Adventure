//constructor function names start with capital letters
function Constructor(id,name,title,task){
  this.Id = id
  this.name = name;
  this.title = title;
  this.task = task;
  this.work = function(){
    console.log(`Guide: ${this.task}`);
  }
}

//this is how we create an object using constructor function
employee1 = new Constructor(1,"Sachin","SDE-I","Project");
employee2 = new Constructor(2,"Suraj","Team Lead","SDE-I");
employee3 = new Constructor(3,"Sanket","Engineering Manager","Team Lead");

//list of objects
let employeeList = [employee1,employee2,employee3];
// let employeeList = new Array();
// employeeList.push(employee1);
// employeeList.push(employee2);
// employeeList.push(employee3);

//print each object properties from the object list
for(let employeeIndex in employeeList){
  let employee =employeeList[employeeIndex];
  for(let info in employee){
    if(info === "work" || info === "task"){
      continue
    }
    else{
      console.log(`${info}: ${employee[info]}`);
    }
  }
  employee.work();
  console.log();
}
