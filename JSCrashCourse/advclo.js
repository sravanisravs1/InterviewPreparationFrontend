


const name1 = (arr)=>{
    var count=0;
    return()=>{
        console.log("hello"+arr[count]);
        count++;
        }
    }

let fun = name1(["Ram","Shyam"]);

fun()// Print Hello Ram

fun()//print Hello Shyam