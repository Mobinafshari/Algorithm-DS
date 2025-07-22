class CustomNode<T> {
  value: T;
  next: CustomNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  public head: CustomNode<T> | null;
  private tail: CustomNode<T> | null;
  private length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  private isEmpty(): boolean {
    return this.length === 0;
  }
  append(value: T): this {
    const node = new CustomNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
    }
    this.tail!.next = node;
    this.tail = node;
    this.length++;
    return this;
  }
  prepend(value: T): this {
    const node = new CustomNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
  insertAt(value: T, index: number): this {
    if (index === 0) {
      this.prepend(value);
      return this;
    } else if (index === this.length) {
      this.append(value);
      return this;
    } else if (index < 0 || index > this.length) {
      throw Error("Index must be less than list length and greater than 0");
    } else {
      const node = new CustomNode(value);
      let current = this.head;
      let prev: CustomNode<T> | null = null;
      let i = 0;

      while (i < index) {
        prev = current;
        current = current!.next;
        i++;
      }

      prev!.next = node;
      node.next = current;
      this.length++;
      return this;
    }
  }

  remove(value: T): this | undefined {
    let current = this.head;
    let prev: CustomNode<T> | null = null;
    while (current !== null) {
      if (current?.value === value) {
        if (prev === null) {
          this.head = current.next;
          this.length--;
          return this;
        } else if (current === this.tail) {
          prev.next = null;
          this.tail = prev;
          this.length--;
          return this;
        }
        prev.next = current.next;
        this.length--;
        return this;
      }
      prev = current;
      current = current.next;
    }
    return undefined;
  }
  removeAt(index: number): this | -1 {
    if (index < 0 || index >= this.length) {
      return -1;
    }

    let current = this.head;
    let prev: CustomNode<T> | null = null;

    if (index === 0) {
      this.head = current!.next;
      if (current === this.tail) {
        this.tail = null;
      }
      this.length--;
      return this;
    }

    for (let i = 0; i < index; i++) {
      prev = current;
      current = current!.next;
    }

    prev!.next = current!.next;

    if (current === this.tail) {
      this.tail = prev;
    }

    this.length--;
    return this;
  }

  createQueue(): T[] {
    const queue: T[] = [];
    let current = this.head;
    while (current !== null) {
      queue.push(current.value);
      current = current.next;
    }
    return queue;
  }
  reverse(): this {
    let prev: CustomNode<T> | null = null;
    let current = this.head;
    let next: CustomNode<T> | null = null;
    this.tail = this.head;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
    return this;
  }

  find(value: T): CustomNode<T> | undefined {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return current;
      current = current.next;
    }
    return undefined;
  }
}

const list = new LinkedList<number>();
list.append(5);
list.append(1000);
list.append(120);
list.prepend(1);
const res = list.insertAt(55, 1);
console.log(list.find(550));
