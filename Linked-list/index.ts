class CustomNode<T> {
  value: T;
  next: CustomNode<T> | null;
  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  private head: CustomNode<T> | null;
  private tail: CustomNode<T> | null;
  private length: number;
  constructor() {}
}
