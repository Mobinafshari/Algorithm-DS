class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Linkedlist {
  constructor() {
    this.list = [];
  }
  append(value) {
    let length = this.list.length;
    const node = new Node(value);
    if (this.isEmpty()) {
      return (this.list[length] = node);
    }
    this.list[length] = node;
    this.list[length - 1].next = this.list[length];
  }
  prepend(value) {
    let length = this.list.length;
    if (this.isEmpty()) {
      const emptyNode = new Node(value);
      return (this.list[length] = emptyNode);
    }
    const node = new Node(value, this.list[0]);
    this.list = [node, ...this.list];
  }
  insertAt(value, index) {
    let length = this.list.length;
    if (index > length) throw Error("index is greater than list length");
    if (index === length) return this.append(value);
    if (index === 0) return this.prepend(value);
    let newList = [];
    for (let i = 0; i < index; i++) {
      newList[newList.length] = this.list[i];
    }
    const node = new Node(value, this.list[index]);
    newList[newList.length] = node;
    newList[newList.length - 2].next = newList[newList.length - 1];
    for (let j = index; j < length; j++) {
      newList[newList.length] = this.list[j];
    }
    this.list = newList;
  }
  isEmpty() {
    return this.list.length === 0;
  }
}

const l = new Linkedlist();

l.prepend(10);
l.append(20);
l.append(30);
l.insertAt(49, 0);
l.prepend(100);
l.insertAt(1000, 2);
console.log(l.list);
