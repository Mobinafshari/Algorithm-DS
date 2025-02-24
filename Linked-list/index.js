class Linkedlist {
  constructor() {
    this.list = [];
  }
  insert(data, next = null) {
    if (next > this.list.length + 1) return null;
    let lastIndex = this.list.length - 1;
    if (this.list.length > 0) {
      this.list[lastIndex].next = lastIndex;
    }
    this.list = [...this.list, { data, next }];
  }
}

const l = new Linkedlist();
l.insert(20);
l.insert(202);
l.insert(20, 2);
l.insert(30);
console.log(l.list);
