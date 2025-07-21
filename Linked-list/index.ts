class CustomNode<T> {
  value: T;
  next: CustomNode<T> | null;
  constructor(value: T) {
    this.value = value;
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
  append(value: T): void {
    const node = new CustomNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }
    this.tail!.next = node;
    this.tail = node;
    this.length++;
  }
  prepend(value: T): void {
    const node = new CustomNode(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
  }
}

const list = new LinkedList();
list.append(5);
list.append("hashem");
list.append(120);
list.prepend(1)
console.log(list.head);
