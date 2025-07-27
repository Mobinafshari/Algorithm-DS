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
  public tail: CustomNode<T> | null;
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
  isCycle(): boolean {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow!.next;
      fast = fast.next.next;

      if (slow === fast) return true;
    }

    return false;
  }
  reverse2(): CustomNode<T> | null {
    let current = this.head;
    let prev: CustomNode<T> | null = null;
    while (current !== null) {
      let next = current?.next;
      current!.next = prev;
      prev = current;
      current = next!;
    }
    return prev;
  }
  getMiddle(): CustomNode<T> | null {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow!.next;
      fast = fast.next.next;
    }
    return slow;
  }
  getMiddle2(): CustomNode<T> | null {
    let slow = this.head;
    let fast = this.head;
    let prev: CustomNode<T> | null = null;
    while (fast !== null && fast.next !== null) {
      prev = slow;
      slow = slow!.next;
      fast = fast.next.next;
    }
    return prev;
  }
  sort2(): LinkedList<T> {
    if (!this.head || !this.head.next) return this;

    const middle = this.getMiddle2();
    const rightHead = middle!.next;
    middle!.next = null;

    const leftList = new LinkedList<T>();
    leftList.head = this.head;

    const rightList = new LinkedList<T>();
    rightList.head = rightHead;

    const sortedLeft = leftList.sort2();
    const sortedRight = rightList.sort2();

    return this.mergeSort2(sortedLeft, sortedRight);
  }

  mergeSort2(listOne: LinkedList<T>, listTwo: LinkedList<T>): LinkedList<T> {
    const result = new LinkedList<T>();

    let curr1 = listOne.head;
    let curr2 = listTwo.head;

    while (curr1 && curr2) {
      if (curr1.value < curr2.value) {
        result.append(curr1.value);
        curr1 = curr1.next;
      } else {
        result.append(curr2.value);
        curr2 = curr2.next;
      }
    }

    while (curr1) {
      result.append(curr1.value);
      curr1 = curr1.next;
    }

    while (curr2) {
      result.append(curr2.value);
      curr2 = curr2.next;
    }

    return result;
  }

  sort(): this {
    if (this.length === 0 || this.length === 1) return this;

    const middle = this.getMiddle();
    let leftHead = this.head;
    let rightHead = middle;

    let current = this.head;
    while (current && current.next !== middle) {
      current = current.next;
    }

    if (current) {
      current.next = null;
    }

    const leftList = new LinkedList<T>();
    leftList.head = leftHead;

    const rightList = new LinkedList<T>();
    rightList.head = rightHead;
    leftList.updateTailAndLength();
    rightList.updateTailAndLength();

    const sortedLeft = leftList.sort();
    const sortedRight = rightList.sort();

    const merged = this.mergeTwoSortedList(sortedLeft, sortedRight);
    this.head = merged.head;
    this.tail = merged.tail;
    this.length = merged.length;

    return this;
  }
  mergeTwoSortedList(
    listOne: LinkedList<T>,
    listTwo: LinkedList<T>
  ): LinkedList<T> {
    const merged = new LinkedList<T>();
    let current1 = listOne.head;
    let current2 = listTwo.head;

    while (current1 !== null && current2 !== null) {
      if (current1.value < current2.value) {
        merged.append(current1.value);
        current1 = current1.next;
      } else {
        merged.append(current2.value);
        current2 = current2.next;
      }
    }

    while (current1 !== null) {
      merged.append(current1.value);
      current1 = current1.next;
    }

    while (current2 !== null) {
      merged.append(current2.value);
      current2 = current2.next;
    }

    return merged;
  }

  updateTailAndLength(): this {
    let n = 0;
    let current = this.head;
    let prev: CustomNode<T> | null = null;
    while (current !== null) {
      prev = current;
      current = current.next;
      n++;
    }
    this.length = n;
    this.tail = prev;
    return this;
  }

  reorderList(): this {
    const middle = this.getMiddle();
    let current = this.head;
    let leftSide = this.head;
    let rightSide = middle;
    while (current && current?.next !== middle) {
      current = current.next;
    }
    if (current) {
      current.next = null;
    }

    const listOne = new LinkedList<T>();
    const listTwo = new LinkedList<T>();
    listOne.head = leftSide;
    listTwo.head = rightSide;
    listTwo.reverse();
    const merged = this.mergeTwoSortedList(listOne, listTwo);
    this.head = merged.head;
    this.tail = merged.tail;
    this.length = merged.length;
    return this;
  }
}

const list = new LinkedList<number>();
list.append(5);
list.append(1000);
list.append(120);
list.append(7);
list.append(2);

console.log(list.reverse2());
