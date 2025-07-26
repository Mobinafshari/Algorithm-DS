class Node<T> {
  value: T;
  next: Node<T> | null;
  prev: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value: T): this {
    const node = new Node<T>(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
    }
    const current = this.head;
    this.head = node;
    node.next = current;
    current.prev = node;
    this.length++;
    return this;
  }
  insert(index: number, value: T): this {
    if (index === 0) return this.append(value);
    if (index === this.length) return this.prepend(value);
    const node = new Node<T>(value);
    let current = this.head;
    let i = index;
    while (current.next !== null) {
      if (i === 0) break;
      current = current.next;
      i--;
    }
    const nextNode = current.next;
    current.next = node;
    node.prev = current;
    node.next = nextNode;
    nextNode?.prev = node;
    this.length++;
  }
  append(value: T): this {
    const node = new Node<T>(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
    }
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    return this;
  }
  isEmpty(): boolean {
    return this.length === 0;
  }
}

const list = new DoublyList<number>();
list.append(5);
list.append(10);
console.log(list.insert(1, 25));
