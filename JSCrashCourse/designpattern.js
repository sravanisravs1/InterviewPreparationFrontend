class Student{
    static count() {
        Student.counter = (Student.counter ||0) + 1;
        return ;
    }
    constructor(name,age,phno,boardmarks){
        Student.count();
        this.name=name;
        this.age=age;
        this.phno=phno;
        this.boardmarks=boardmarks;
        
    }
    
    isEligible(){
        if (this.boardmarks>=40){
            console.log("eligible");
        }else
        {
            console.log("not eligible");
        }
    }
}
let student1=new Student("sravani","40","8309165099","45");
let student2=new Student("vani","40","8309165990","50");
let student3=new Student("sri","40","8309165909","44");
let student4=new Student("ravan","40","8309105919","5");
let student5=new Student("sravs","40","8309065999","50");
student1.isEligible();
student2.isEligible();
student3.isEligible();
student4.isEligible();
student5.isEligible();
console.log(Student.counter);
