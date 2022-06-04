class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  // should add a new node to end of the queue and return the new length of the queue
  enqueue(val) {
    let length = this.size();
    let newNode = new Node(val);
    if (length == 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
    }
    this.back = newNode;
    length++;
    return length; //return new length of the queue
  }
  // should remove the front node and return that node’s value
  dequeue() {
    let length = this.size();
    let removednode = this.front;
    if (length <= 1) {
      this.front = this.back = null;
      length = 0;
    } else {
      this.front = this.front.next;
      length--;
    }
    return removednode.val; //return removed node's value
  }

  // should return the length of the queue
  size() {
    let temp = this.front;
    let count = 0;
    while (temp != null) {
      temp = temp.next;
      count++;
    }
    return count;
  }
}

const myQueue = new Queue();
myQueue.enqueue("one");
myQueue.enqueue("two");
console.log(myQueue.enqueue("three"));
console.log(myQueue.size());
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.size());
