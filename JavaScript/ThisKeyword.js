let laptop = {
  name:"HP",
  core:"i5",
  RAM:16,
  info:() => {
    console.log("Welcome to Windows");
    for(let property in laptop){
    console.log(laptop[property]);
    }
  },
  compare: (laptop) => {
    if(this.core > laptop.core){ //use of this keyword in object
      console.log("My humble abode, master");
    }
    else{
      console.log("Bow! before your king");
    }
  }
  }
  let laptop2 = {
    name:"HP",
    core:"i3",
    RAM:16
  }

laptop.info();
laptop.compare(laptop2);
