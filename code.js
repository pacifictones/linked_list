class LinkedList {
  constructor() {
    this.head = null;
  }
  // add to end of list
  append(value) {
    let node = new Node(value);
    let current;

    //if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  //add to first of list
  prepend(value) {
    this.head = new Node(value, this.head);
  }

  //return number of nodes
  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  //return first node
  first() {
    return this.head;
  }

  //return last node
  tail() {
    let index = this.size() - 1;
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.value);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //return node at given index
  at(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.value);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //remove first node
  shift() {
    this.head = this.head.next;
  }

  //remove last node
  pop() {
    let current = this.head;
    let count = 0;
    let previous;
    let index = this.size() - 1;

    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }

  //returns true if true if value is in list or false if not
  contains(value) {
    let current = this.head;
    let previous;
    let count = 0;
    let index = this.size();

    while (count < index) {
      if (value == current.value) {
        return true;
      }
      count++;
      previous = current;
      current = current.next;
    }
    return false;
  }

  //return index of node containing value or null
  find(value) {
    let current = this.head;
    let previous;
    let index = this.size();
    let count = 0;

    while (count < index) {
      if (value == current.value) {
        return count;
      }
      count++;
      previous = current;
      current = current.next;
    }
    return null;
  }

  //represent LinkedList as string for printing and console preview
  toString() {
    let current = this.head;
    let previous;
    let string = "";

    while (current) {
      string += `( ${current.value} ) -> `;
      previous = current;
      current = current.next;
    }
    string += " null";
    return string;
  }

  //print values
  printValues() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const ll = new LinkedList();

ll.prepend(100);
ll.prepend(200);
ll.prepend(300);
ll.append(400);

ll.pop();

ll.printValues();

console.log(ll.toString());
