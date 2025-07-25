class MyCircularQueue<T> {
  private queue: (T | null)[];
  private head: number;
  private tail: number;
  private size: number;
  private count: number;

  constructor(k: number) {
    this.queue = new Array(k).fill(null);
    this.size = k;
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }

  enQueue(value: T): boolean {
    if (this.isFull()) return false;

    this.queue[this.tail] = value;
    this.tail = (this.tail + 1) % this.size;
    this.count++;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;

    this.queue[this.head] = null;
    this.head = (this.head + 1) % this.size;
    this.count--;
    return true;
  }


  Front(): T | null {
    return this.isEmpty() ? null : this.queue[this.head];
  }

  Rear(): T | null {
    if (this.isEmpty()) return null;
    return this.queue[(this.tail - 1 + this.size) % this.size];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  isFull(): boolean {
    return this.count === this.size;
  }
}
const q = new MyCircularQueue<number>(5);
q.enQueue(5);
q.enQueue(500);
q.enQueue(50);
q.deQueue();
q.enQueue(100);
q.enQueue(200);
q.enQueue(300);
console.log(q);
