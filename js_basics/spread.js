const user1 = {

        name: 'Sandhya',
    
        age: 22,
    
    };
    
      
    
    const user2 = {
    
        name: "sravs",
    
        location: "hyd" 
    
    };
    
      
    
    const mergedUsers = {...user1, ...user2};
    
    console.log(mergedUsers)
    //=======================================================//
let studentobj = {

    'yash': 26,
    
    'vaibhav': 24,
    
    'rajesh' : 25,
    
    }
        
function findaverageage(studentObj){

    const studentages=Object.values(studentobj);
    
    let averageAge=0;
    let keys=(studentages.length);
    for (let i=0;i<studentages.length;i++){
        averageAge=averageAge+studentages[i]
        }
        
        
            
        
    return averageAge/keys
        
}
console.log(findaverageage({'yash': 26,'vaibhav': 24,'rajesh' : 25}));

        
        