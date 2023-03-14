class Human{
    constructor(){
        this.gender="female"
    }
    printGender(){
        console.log(this.gender)
    }
}

class Person extends Human{
    constructor(){
        super();
        this.name="sravani";
        this.age=28;
    }
    printMyName(){
        console.log(this.name);
    }
    printAge(){
        console.log(this.age);;
    }
}
const person=new Person();
person.printMyName();
person.printAge();
person.printGender();