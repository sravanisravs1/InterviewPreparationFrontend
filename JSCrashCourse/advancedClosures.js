function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*100);
    }
}
x();

//while using var ,it has one copy of i,but let is bock scoped
//without using let,we can create a function in closure
function y(){
    for(let i=1;i<=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            },x*2000);
         }
    close(i);     
    }
}
y();
