class Node {
    value;
    next;
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        if (this.length >= 100)
            throw new Error('Out of range error, this list contains max 100 nodes');
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    findMiddle() {
        const length = this.length; //odd or even
        const middleIndex = Math.floor(length / 2);
        console.log("middleIndexmiddleIndex: ", middleIndex);
        let temp = this.head;
        for (let i = 0; i < middleIndex; i++) {
            temp = temp.next;
        }
        return temp;
    }
}

const list = new LinkedList();
list.push(2);
list.push(4);
list.push(6);
list.push(9);
list.push(6);
console.log(list);

console.log("Middle ===> ", list.findMiddle());
