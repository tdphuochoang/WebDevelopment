class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
  }

  //Add a new node with the given value to the end of the list
  append(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    return this;
  }

  //Add a new node with the given value to the beginning of the list
  prepend(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    }
    let currentHead = this.head;
    this.head.prev = newNode;
    newNode.next = currentHead;
    this.head = newNode;
    return this;
  }

  //Add a new node with the given value to the given index
  insert(val, position) {
    if (position < 0 || position >= this.size()) {
      return null;
    }
    if (position === 0) {
      return this.prepend(val);
    }
    if (position === this.size()) {
      return this.append(val);
    }

    let currentNode = this.head;
    for (let i = 0; i < position; i++) {
      currentNode = currentNode.next;
    }
    let prevNode = currentNode.prev;
    let newNode = new Node(val);
    newNode.next = currentNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    currentNode.prev = newNode;
    return newNode;
  }

  // Remove the node with the given value from the list
  remove(val) {
    if (this.head == null) {
      return null;
    }
    if (this.head.val == val) {
      //When val is first node
      this.head = this.head.next;
      if (this.head != null) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (this.tail.val == val) {
      //When val is last node
      this.tail = this.tail.prev;
      if (this.tail != null) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
    } else {
      let temp = this.head;
      while (temp != null && temp.val != val) {
        //Finding the node matchs the given value
        temp = temp.next;
      }
      if (temp == null) {
        //Value not found
        console.log("There is no match found");
      } else {
        temp.prev.next = temp.next;
        if (temp.next != null) {
          temp.next.prev = temp.prev;
        }
      }
    }
  }

  //Return the length of the list
  size() {
    let temp = this.head;
    let count = 0;
    while (temp != null) {
      temp = temp.next;
      count++;
    }
    return count;
  }

  //Return the node found at the given index
  nodeAtIndex(idx) {
    if (idx < 0 || idx >= this.size()) {
      return null;
    }
    if (idx === 0) {
      return this.head;
    }
    if (idx === this.size()) {
      return this.tail;
    }
    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // print the list
  printList() {
    const my_arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      my_arr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    const my_string = my_arr.join("<=>");
    console.log(my_string);
  }
}

const myDoublyLinkedList = new doublyLinkedList();
myDoublyLinkedList.append("pew");
myDoublyLinkedList.append("nah");
myDoublyLinkedList.prepend("hello");
myDoublyLinkedList.printList();
myDoublyLinkedList.insert("bye", 2);
myDoublyLinkedList.printList();
console.log(myDoublyLinkedList.size());
console.log(myDoublyLinkedList.nodeAtIndex(3));
myDoublyLinkedList.remove("bye");
myDoublyLinkedList.remove("hello");
myDoublyLinkedList.printList();
