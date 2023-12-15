//Question 1
class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.back = 0;
    }
    //time complex = o(1), constant time
    enqueue(item) {
        this.items.push(item);
        this.back++;
        return item;
    }
    //time complex = o(1), constant time
    dequeue() {
        delete this.items[this.front];
        this.front++;
        return item;
    }
    peek() {
        return this.items[this.front];
    }
    isEmpty() {
        return this.items.length == 0;
    }
}
//Example
const q = new Queue();
q.enqueue("hi","bye");
console.log(q);


//Question 2
/*
during enqueue operation we have to add priority number for each element
during dequeue we have to compare the last elemet which we need to dequeue, and the others element
in case of a higher priorty element is matched
swap the 2 elements
then dequeue

time complex
traverse linear time o(n) + dequeue time o(1)
finally frop the constant
time complex = o(n) linear time
*/