class Node<T> {
  private value : T;
  private next : Node<T> | null;
  private prev : Node<T> | null;
  constructor(value :T){
    this.value = value;
    this.next = null;
    this.prev = null
  }
}

class DoublyList<T> {
  private head : Node<T> | null;
  private tail : Node<T> | null;
  private length : number;
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value : T) : this {
    const node = new Node<T>(value)
    if(this.isEmpty()){
      this.head = node;
      this.tail = node;
      this.length++
      return this
    }
    let current = this.head;
    while(current.next !== null){
      current = current?.next;
    }
    current.next = node;
    node.prev = current;
    this.length++
    this.tail = node;
    return this
  }
  prepend(value : T) : this {
     const node = new Node<T>(value)
    if(this.isEmpty()){
      this.head = node;
      this.tail = node;
      this.length++
      return this
    }
    const current = this.head;
    this.head = node;
    node.next = current;
    current.prev = node;
    this.length++;
    return this
  }
  isEmpty():boolean{
    return this.length === 0
  }
}


const list = new DoublyList<number>();
list.append(5);
list.append(10)
console.log(list.prepend(25))
