class DQueNode
{
    constructor()
    {
        this.value = 0;
         this.next = null;
        this.prev = null;
    }
}
 
// Implementation of deque class
class deque
{
     // Constructor
    constructor()
    {
        this.head = this.tail=null;
    }
     
    // If list is empty
    isEmpty()
    {
        if (this.head == null)
            return true;
              
        return false;
    }
     
    // count the number of nodes in list
    size()
    {
        // If list is not empty
        if (!this.isEmpty())
        {
            let temp = this.head;
            let len = 0;
              
            while (temp != null)
            {
                len++;
                temp = temp.next;
            }
            return len;
        }
        return 0;
    }
     
    // Insert at the first position
    insert_first(element)
    {
     
        // Allocating node of DQueNode type
        let temp = new DQueNode();
        temp.value = element;
  
        // If the element is first element
        if (this.head == null)
        {
            this.head = this.tail = temp;
            temp.next = temp.prev = null;
        }
        else
        {
            this.head.prev = temp;
            temp.next = this.head;
            temp.prev = null;
            this.head = temp;
        }
    }
     
    // Insert at last position of deque
    insert_last(element)
    {
        // Allocating node of DQueNode type
        let temp = new DQueNode();
        temp.value = element;
  
        // If element is the first element
        if (this.head == null)
        {
            this.head = this.tail = temp;
            temp.next = temp.prev = null;
        }
        else
        {
            this.tail.next = temp;
            temp.next = null;
            temp.prev = this.tail;
            this.tail = temp;
        }
    }
     
    // Remove element at the first position
    remove_first()
    {
     
        // If list is not empty
        if (!this.isEmpty())
        {
            let temp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
  
            return;
        }
        console.log("List is Empty");
    }
     
    // Remove element at the last position
    remove_last()
    {
        // If list is not empty
        if (!this.isEmpty())
        {
            let temp = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
  
            return;
        }
        console.log("List is Empty");
    }
     
    // Displays the elements in deque
    display()
    {
        // If list is not empty
        if (!this.isEmpty())
        {
            let temp = this.head;
              
            while (temp != null)
            {
                document.write(temp.value + " ");
                temp = temp.next;
            }
  
            return;
        }
        console.log("List is Empty");
    }
}
 
// Class to implement stack using Deque
class Stack
{
    constructor()
    {
        this.d= new deque();   
    }
     
     
    // push to push element at top of stack
    // using insert at last function of deque
    push(element)
    {
        this.d.insert_last(element);
    }
     
    // Returns size
    size()
    {
        return this.d.size();
    }
     
    // pop to remove element at top of stack
    // using remove at last function of deque
    pop()
    {
        this.d.remove_last();
    }
     
    // Display
    display()
    {
        console.log(this.d);
    }
}
let stk = new Stack();
 
// push 7 and 8 at top of stack
stk.push(7);
stk.push(8);

// pop an element
stk.pop();
stk.display();
stk.size();
console.log(stk)