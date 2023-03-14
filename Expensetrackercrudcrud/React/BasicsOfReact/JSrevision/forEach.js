var object={
    "shyam":20,
    'ram':30,
    'siva':25
}
let keyValues=Object.values(object)
console.log(keyValues)
let sum=0
keyValues.forEach((key)=>
{
    sum+=key
    }
)
console.log(sum)