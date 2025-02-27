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
    const node = new Node(value);

    if (this.tree === null) {
      this.tree = node;
      return;
    }

    let current = this.tree;

    while (true) {
      if (value > current.data) {
        if (current.right === null) {
          current.right = node;
          return;
        }
        current = current.right;
      } else if (value < current.data) {
        if (current.left === null) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        return;
      }
    }
  }
}

const list = new BinarySearchTree();
list.add(20);
list.add(30);
list.add(10);
list.add(100);
list.add(25);
list.add(5);
list.add(500);
list.add(15);
console.log(list.tree);
