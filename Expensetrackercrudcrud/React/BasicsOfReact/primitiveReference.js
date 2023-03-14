const number=2;
let num1=number;
console.log(num1);

//mutable or deep copy happens like this
 const person={
    name:"sravani",
    age:28
 }
 const secondPerson=person;
 console.log(secondPerson)
 secondPerson.name="Rajesh";
 console.log(person.name)

 //To avoid this we use spread operator

 const thirdPerson={...person,name:"max"}
 console.log(thirdPerson.name);
 console.log(person.name)
