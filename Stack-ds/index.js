class Stack {
  constructor() {
    this.stack = [];
  }
  top() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }
  push(item) {
    this.stack[this.stack.length] = item;
  }
  pop() {
    if (this.stack.length > 1) {
      this.stack.length = this.stack.length - 1;
    } else {
      this.stack = [];
    }
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}

const stack = new Stack();
