const person = {

    fullName: function() {
  
      return this.firstName + " " + this.lastName;
  
     }
  
  }
  
   const person1 = {
  
     firstName:"John",
  
    lastName: "Doe"
  
    }
  
   const person2 = {
  
    firstName:"Mary",
  
    lastName: "Doe"
  
  }
  
   
  
   // This will return "Mary Doe"
  
    console.log(person.fullName.call(person2));
  
  
//==================================================== 
const obj = {

    fullName: function(city, country) {
  
       return this.firstName + " " + this.lastName   + "," + city + "," + country;
  
     }
  
  }
  
   
  
   const obj1 = {
  
     firstName:"John",
  
    lastName: "Doe"
  
   }
  
   
  
   person.fullName.apply(obj1, ["Oslo", "Norway"]);
   
   //====================================
   const person3 = {

    firstName:"John",
 
    lastName: "Doe",
 
   fullName: function () {
 
     return this.firstName + " " + this.lastName;
 
    }
 
  }
 
  
 
  const member = {
 
    firstName:"Hege",
 
    lastName: "Nilsen",
 
  }
 
  
 
  let fullName = person3.fullName.bind(member);


