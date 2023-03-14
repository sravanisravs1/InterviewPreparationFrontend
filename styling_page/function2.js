function Student(firstname,lastname,rollnumber,Sex,students_age){
  this.firstname=firstname;
  this.lastname=lastname;
  this.rollnumber=rollnumber;
  this.Sex=Sex;
  this.students_age=students_age;
}
const student1=new Student("John","Doe",23,'M',25)
const student2=new Student("Peter","Doe",28,'M',30)
if (student1.age>student2.age){
console.log(student1.firstname+student1.lastname)
}else{
    console.log(student2.firstname+student2.lastname)
}    
//Write a function inside the constructor to getBirthYear and fullName of the student
//Write a function outside which takes minimum age to be egligible as arguments and return whether the student is egligible or not by calculating his age from dob .
//If student's age greater than or equal to minimum age to be egligible => he is egligible, else he is not egligible
function Studentinfo(getBirthYear,fullname,age){
  this.getBirthYear=getBirthYear;
  this.fullname=fullname;
  this.age=age;
  
}


const student3=new Studentinfo("06/24/2008",'RajeshYakamuri',32);
var dob= new Date(student3.getBirthYear);
//calculate month difference from current date in time  
var mnth_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(mnth_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
      
    //display the calculated age  
    document.write("Age of the date entered: " + age + " years");  

console.log(student3.age);
function isStudenteligible(minage){
    this.minage=minage;
    if (age>=this.minage){
        console.log('he is eligible');
        
    }else{
      console.log('he is not eligible')  ;
    }
    
}
 
 isStudenteligible(30)