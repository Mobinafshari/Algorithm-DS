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
}

const list = new LinkedList<number>();
list.append(5);
list.append(1000);
list.append(120);
console.log(list.prepend(1))