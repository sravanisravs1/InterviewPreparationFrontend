class Queue {


       constructor() {
    
    
           this.items = [];
    
    
       }
    
    
    
    
       // add element to the stack
    
    
       enqueue(element) {
    
    
           return this.items.push(element);
    
    
       }
    
    
    
    
       // remove element from the stack
    
    
       dequeue() {
    
    
           if(this.items.length > 0) {
    
    
               return this.items.shift();
    
    
           }
    
    
       }
    
    
    
    
       // view the last element
    
    
       rear() {
    
    
           return this.items[this.items.length - 1];
    
    
       }
    
    
       front(){
    
           return this.items[0];
    
       }
    
    
    
    
       // check if the stack is empty
    
    
       isEmpty(){
    
    
          return this.items.length == 0;
    
    
       }
    
    
    
    
       // the size of the stack
    
    
       size(){
    
    
           return this.items.length;
    
    
       }
    
    
    
    
       // empty the stack
    
    
       clear(){
    
    
           this.items = [];
    
    
       }
    
    
    }
    
    let queue1=new Queue();
    
    queue1.enqueue(1);
    
    queue1.enqueue(2);
    
    queue1.enqueue(3);
    
    queue1.enqueue(4);
    
    console.log(queue1);
    
    queue1.dequeue();
    
    console.log(queue1);
    
    console.log(queue1.front());
    
    console.log(queue1.rear());
    
    console.log(queue1.size());
    
    queue1.clear();
    
    console.log(queue1.isEmpty());
    
    
    