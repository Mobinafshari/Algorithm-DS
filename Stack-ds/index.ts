class Stack<T> {
  public stack: T[];
  constructor() {
    this.stack = [];
  }

  push(value: T): this {
    this.stack[this.stack.length] = value;
    return this;
  }
  pop(): T | undefined {
    if (this.isEmpty()) return undefined;
    let topElement = this.stack[this.stack.length - 1];
    this.stack.length--;
    return topElement;
  }
  private isEmpty(): boolean {
    return this.stack.length === 0;
  }
  peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.stack[this.stack.length - 1];
  }
  isFull(maxSize: number): boolean {
    return this.stack.length === maxSize;
  }
  getMin(): number | undefined {
    if (this.isEmpty()) return undefined;
    let min = Infinity;
    for (const num of this.stack as number[]) {
      min = min > num ? num : min;
    }
    return min;
  }
}

function asteroidCollision(asteroids: number[]): number[] {
  const stack = new Stack<number>();
  for (const number of asteroids) {
    if (number > 0) {
      stack.push(number);
      continue;
    }
    const top = stack.peek();
    if (top && number * -1 > top) {
      stack.pop();
    }
  }
  return stack.stack;
}
type Operator = "+" | "-" | "/" | "*";
function evalRPN(tokens: string[]): number {
  const stack = new Stack<number>();
  for (const token of tokens) {
    if (+token) {
      stack.push(+token);
      continue;
    } else {
      const b = stack.pop();
      const a = stack.pop();
      const result = evaluate(token as Operator, a!, b!);
      stack.push(result);
    }
  }

  function evaluate(op: Operator, a: number, b: number) {
    switch (op) {
      case "+":
        return a + b;
      case "*":
        return a * b;
      case "-":
        return a - b;
      case "/":
        return Math.trunc(a / b);
    }
  }
  return stack.stack[0];
}
function dailyTemperatures(temperatures: number[]): number[] {
  const res: number[] = new Array(temperatures.length).fill(0);
  const stack = new Stack<number>();

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.stack.length > 0 &&
      temperatures[i] > temperatures[stack.stack[stack.stack.length - 1]]
    ) {
      const prevIndex = stack.pop()!;
      res[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return res;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
