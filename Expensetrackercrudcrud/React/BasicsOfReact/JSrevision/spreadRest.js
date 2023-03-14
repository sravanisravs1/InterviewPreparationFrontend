//... Spread and Rest operators
//Spread:used to split up array elements or object properties
const oldArray=[1,2];
const newArray=[...oldArray,3,4,5];
console.log(newArray)

var oldObject={
    name:"sravani",
    age:28
}
var newObject={
    ...oldObject,gender:"Female"
}
console.log(newObject)

//Rest operator:used to merge a list of function arguments into an array

const filter=(...args)=>{
    return args.filter(el=>el===1);
}
console.log(filter(1,2,2,3,1))

const map=(...a)=>{
    return a.map(el=>el*2)
}
console.log(map(1,2,3,4,5))
