class Queue<T> {
  public list: T[];
  constructor() {
    this.list = [];
  }

  push(value: T): this {
    this.list[this.list.length] = value;
    return this;
  }

  pop(): T | undefined {
    if (this.isEmpty()) return undefined;
    const removed = this.list[0];
    for (let i = 1; i < this.list.length; i++) {
      this.list[i - 1] = this.list[i];
    }
    this.list.length--;
    return removed;
  }
  peek(): T {
    return this.list[0];
  }
  isEmpty(): boolean {
    return this.list.length === 0;
  }
}

const q = new Queue<number>();

q.push(10);
q.push(24);
q.push(78);
console.log(q.pop());
