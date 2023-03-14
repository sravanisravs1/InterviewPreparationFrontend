let user = {
    name: "GFG",
    gfg1:() => {
        console.log("hello " + this.name); // no 'this' binding here
    },
    gfg2(){   
        console.log("Welcome to " + this.name); // 'this' binding works here
    }
};
user.gfg1();
user.gfg2();