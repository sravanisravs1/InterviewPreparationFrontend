let name={
    firstname:'sravani',
    lastname:'koduru',
    
    
    printFullName:function(town,code){
        console.log( this.firstname+" " + this.lastname+ " from " +town+"  ,pincode is "+code);
        
    }
}
let name2={
    firstname:"Rajesh",
    lastname:"Yakamuri",
}


name.printFullName("hyd","500050");
name.printFullName.call(name2,"vijayawada","783003");
name.printFullName.apply(name2,["vij","500020"])
 //bind //function that can be invoked later
let  printFullname=function(town,code){
        console.log( this.firstname+" " + this.lastname+ " from " +town+"  ,pincode is "+code);
        
    }
///currying
// Currying refers to the process of transforming a function with multiple arity into the same function with less arity. The curried effect is achieved by binding some of the arguments to the first function invoke, so that those values are fixed for the next invocation.
//  two ways to achieve that, firstly by using bind function and the second using the concept of closure. 
let multiply=function(x,y){
    console.log(x*y);
} 
//let multiplyByTwo=multiply.bind(this,2);

//let multiplyByThree=multiply.bind(this,3);
//multiplyByTwo(5);
//multiplyByThree(5);
//currying using closures

let multipl2=function (x){
    return function (y){
        console.log(x*y);
    }
}
 let multiplyByTwo=multipl2(2);
 let multiplyByThree=multipl2(3);
 multiplyByTwo(3);
 multiplyByThree(5)
