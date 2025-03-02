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

  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  remove(value) {
    let current = this.tree;
    let parent = null;

    while (current !== null) {
      if (value === current.data) {
        if (current.left === null && current.right === null) {
          if (parent === null) {
            this.tree = null;
          } else if (parent.left === current) {
            parent.left = null;
          } else {
            parent.right = null;
          }
          return;
        }

        if (current.left === null || current.right === null) {
          const child = current.left !== null ? current.left : current.right;
          if (parent === null) {
            this.tree = child;
          } else if (parent.left === current) {
            parent.left = child;
          } else {
            parent.right = child;
          }
          return;
        }

        const successor = this.findMin(current.right);
        const successorValue = successor.data;
        this.remove(successorValue);
        current.data = successorValue;
        return;
      }

      parent = current;
      current = value > current.data ? current.right : current.left;
    }

    return -1;
  }
  find(value) {
    if (!this.tree) return false;
    let current = this.tree;
    while (current !== null) {
      if (current.data === value) return true;
      if (current.data < value) {
        if (current.right !== null) {
          current = current.right;
        } else {
          return false;
        }
      } else {
        if (current.left !== null) {
          current = current.left;
        } else {
          return false;
        }
      }
    }
  }
  isFull() {
    let node = this.tree;
    if (node === null) return true;

    if (node.left === null && node.right === null) return true;

    if (node.left === null || node.right === null) return false;

    return this.isFull(node.left) && this.isFull(node.right);
  }
}

const list = new BinarySearchTree();
list.add(20);
list.add(30);
list.add(10);
list.add(100);
list.add(25);
console.log(list.isFull());
console.log(list.tree);
