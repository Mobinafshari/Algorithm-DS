class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.tree = null;
  }
  add(value) {
    let node = new Node(value);
    if (this.tree === null) {
      this.tree = node;
      return;
    }
  }
}

const list = new BinarySearchTree();
list.add(20);
console.log(list.tree);
