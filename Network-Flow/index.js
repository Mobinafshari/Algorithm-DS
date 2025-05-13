class Node {
  constructor(value){
    this.value = value;
    this.edges = [];
  }
}

class graph{
  constructor(){
    this.list = []
  }
  add(value){
    const node = new Node(value);
    this.list.push(node)
  }
}

const gh = new graph();
gh.add(10);
console.log(gh.list)
