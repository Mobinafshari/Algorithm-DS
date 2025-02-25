class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
    if(index > this.size) throw Error('Index Cannot be greater than the linked list size')
    if (index === this.size) return this.append(value);
    if (index === 0) return this.prepend(value);
    const node = new Node(value);
    this.size++;
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }
  isEmpty() {
    return this.head === null;
  }
}

const l = new Linkedlist();

l.append(20);
l.append(10);
l.prepend(30);
l.prepend(300);
l.insertAt(49, 1);

console.log(l.head);
console.log(l.size);
