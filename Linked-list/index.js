class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(value) {
    const node = new Node(value);
    this.size++;

    if (this.isEmpty()) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next; 
    }

    current.next = node; 
  }
  prepend(value) {
    const node = new Node(value);
    this.size++;
    if (this.isEmpty()) {
      return (this.head = node);
    }
    node.next = this.head;
    return (this.head = node);
  }
  insertAt(value, index) {
    if (index === this.size) return this.append(value);
    if (index === 0) return this.prepend(value);
    
  }
  isEmpty() {
    return this.head === null;
  }
}

const l = new Linkedlist();

l.append(20);
l.append(10);
l.prepend(30);
// l.append(30);
l.insertAt(49, 3);
// l.prepend(100);
// l.insertAt(1000, 2);
console.log(l.head);
console.log(l.size);
