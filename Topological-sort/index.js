class Node {
    constructor(name){
        this.name = name;
        this.next = []
    }
}

class DAG {
    constructor(){
        this.nodes = new Map();
    }
    addNode(name){
        if(this.nodes.has(name)) return;
        this.nodes.set(name , new Node(name))
    }
    addEdge(from , to){
        if(!this.getNode(from)){
            this.addNode(from)
        } if(!this.getNode(to)){
            this.addNode(to);
        }
        this.getNode(from).next.push(this.getNode(to))
    }
    getNode(name){
        return this.nodes.get(name)
    }
    getAllNodes(){
        return [...this.nodes.values()]
    }
}
function topologicalSort(graph) {
    
}
const dag = new DAG();

dag.addEdge("A", "C");
dag.addEdge("B", "C");
dag.addEdge("C", "D");

console.log(dag.getAllNodes())