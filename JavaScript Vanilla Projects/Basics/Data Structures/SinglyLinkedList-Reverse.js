class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next ? next : null;
  }
}

class SinglyLinkedList {
  constructor(head) {
    this.head = head;
  }

  reverse() {
    if (this.head === null) {
      return;
    }
    let temp = this.head;
    let prev = null;
    let next = null;

    while (temp) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
      next = null;
    }
    this.head = prev;
    return this.head;
  }
}

let newNode = new Node(1, new Node(2, new Node(3, new Node(4))));
let list = new SinglyLinkedList(newNode);

console.log(list.reverse());
