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
    if (index > this.size)
      throw Error("Index Cannot be greater than the linked list size");
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
  removeFrom(index) {
    if (index >= this.size || index < 0)
      throw Error("Index Cannot be greater than the linked list size");
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
    }
    this.size--;
  }
  removeNode(value) {
    let element = -1;
    if (this.isEmpty()) return element;
    let current = this.head;
    this.size--;
    for (let i = 0; i < this.size; i++) {
      if (current.value === value) {
        element = this.head;
        this.head = current.next;
        return element;
      }
      if (current.next.value === value) {
        element = current.next;
        current.next = current.next.next;
        return element;
      }
      current = current.next;
    }
    return element;
  }
  find(value){
    let current = this.head;
    while(current !== null){
      if(current.value === value) return current;
        current = current.next;
    }
    return null
  }
  getAt(index){
    if (index >= this.size)
      throw Error("Index Cannot be greater than the linked list size");
    if(index === 0) return this.head;
    let current = this.head;
    let i = 0 ;
    while( i !== index){
      current = current.next;
      i++;
    }
    return current
  }
  reverse() {
    let prev = null;
    let current = this.head;
    
    while (current !== null) {
        let next = current.next; 
        current.next = prev; 
        prev = current; 
        current = next; 
    }

    this.head = prev}
  isEmpty() {
    return this.head === null;
  }
}

const l = new Linkedlist();

l.append(20);
l.append(10);
l.append(30);
// l.prepend(30);
l.prepend(300);
l.insertAt(49, 1);
// console.log("===>>", l.removeNode(10));
// console.log(l.getAt(3))
// l.reverse()
console.log(l.head);
console.log(l.size);