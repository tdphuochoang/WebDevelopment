class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor(head) {
    this.head = head;
  }
  // should add a new node to the end of the linked list
  append(val) {
    let newNode = new Node(val);
    let length = this.size();
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    length++;
    return this.head;
  }
  // should add a new node to the beginning of the linked list
  prepend(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      return this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
  // should insert a new node at a given position
  insert(val, position) {
    if (!this.head) {
      this.head = new Node(val);
      return;
    }
    if (position === 0) {
      this.head = new Node(val, this.head);
      return;
    }
    let prev = this.nodeAtIndex(position - 1);
    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;

    return this.head;
  }
  // should remove the node with the given value from the list
  remove(val) {
    if (this.head == null) {
      return null;
    }
    while (this.head.val == val) {
      this.head = this.head.next;
    }
    let currentNode = this.head;
    let nextNode = currentNode.next;
    while (nextNode != null) {
      if (nextNode.val == val) {
        currentNode.next = nextNode.next;
        if (currentNode.next == null) break;
      }
      currentNode = currentNode.next;
      nextNode = currentNode.next;
    }
    return this.head;
  }
  // should return the length of the linked list
  size() {
    let temp = this.head;
    let count = 0;
    while (temp != null) {
      temp = temp.next;
      count++;
    }
    return count;
  }
  // should return the node at the given index; if not found, return -1
  nodeAtIndex(idx) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === idx) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return -1;
  }

  // should print the list in this format:
  // `${head node value} => ${node value} … => ${tail node value}`
  printList() {
    const my_arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      my_arr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    const my_string = my_arr.join("=>");
    console.log(my_string);
  }
}

const mySinglyLinkedList = new singlyLinkedList();
mySinglyLinkedList.append("pew");
mySinglyLinkedList.append("hello");
mySinglyLinkedList.append("nice");
mySinglyLinkedList.prepend("friend");
mySinglyLinkedList.prepend("hello");
mySinglyLinkedList.prepend("my");
console.log(mySinglyLinkedList);
console.log(mySinglyLinkedList.size());
console.log(mySinglyLinkedList.nodeAtIndex(1));
mySinglyLinkedList.insert("world", 1);
mySinglyLinkedList.remove("friend");
mySinglyLinkedList.printList();
