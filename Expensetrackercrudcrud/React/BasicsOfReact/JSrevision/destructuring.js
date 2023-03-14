//Easily extract array elements or object properties and store them in variables

//Array Destructuring

[a,b]=[2,3,5]
console.log(a,b)

const numbers=[1,2,3];
[num1,,num3]=numbers;
console.log(num1,num3)


//object destructuring

var {name,age}={name:"sravani",age:28};
console.log(name)
console.log(age)