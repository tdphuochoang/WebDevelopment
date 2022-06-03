class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
  }

  // should add a new node to the top of the stack and return the stack’s new length
  push(val) {
    let newNode = new Node(val);
    let length = this.size();
    if (length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const currentNode = this.top;
      this.top = newNode;
      this.top.next = currentNode;
    }
    length++;
    return length; //return the stack new length
  }
  // should remove top node, shorten length and return removed node value
  pop() {
    if (this.top != null) {
      const removedNode = this.top;
      this.top = removedNode.next;
      let length = this.size();
      length--;
      if (length === 0) {
        this.bottom = null;
      }
      return removedNode.val; //return removed node
    }
    return null; //return null if the stack is empty
  }
  // should return length of the stacks
  size() {
    let temp = this.top;
    let count = 0;
    while (temp != null) {
      temp = temp.next;
      count++;
    }
    return count;
  }
  // should return the value of the node at the top of the stack
  peek() {
    return this.top.val;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.push(3));
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.peek());
