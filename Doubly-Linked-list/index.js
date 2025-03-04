class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(value) {
    const node = new Node(value);
    this.size++;
    if (this.isEmpty()) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  remove(value) {
    let element = -1;
    if (this.isEmpty()) return element;

    let current = this.head;

    while (current) {
      if (current.value === value) {
        element = current;

        if (current === this.head) {
          this.head = current.next;
          if (this.head) {
            this.head.prev = null;
          }
        }

        if (current === this.tail) {
          this.tail = current.prev;
          if (this.tail) {
            this.tail.next = null;
          }
        }

        if (current.prev) {
          current.prev.next = current.next;
        }
        if (current.next) {
          current.next.prev = current.prev;
        }

        this.size--;
        return element;
      }

      current = current.next;
    }

    return element;
  }
  isEmpty() {
    return this.head === null;
  }
}

const list = new doublyLinkedList();
list.add(5);
list.add(15);
list.add(25);
list.remove(15);
console.log(list.head);
