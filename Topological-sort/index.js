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
    getStartedNode(){
        const nodeNames = Array.from(this.nodes.keys());
        const hasInputNodes = new Set();
        this.nodes.forEach((node) => 
            node.next.forEach((next) => {
                hasInputNodes.add(next.name)
            })
        )
        return nodeNames.find((node) => !Array.from(hasInputNodes).includes(node))
        
    }
}
function topologicalSort(graph) {
    const visited = new Set();
    const result = [];
    const visiting = new Set(); 

    function dfs(node) {
        if (visiting.has(node.name)) {
            throw new Error(`Cycle detected at node ${node.name}`);
        }

        if (visited.has(node.name)) return;

        visiting.add(node.name);
        for (const neighbor of node.next) {
            dfs(neighbor);
        }
        visiting.delete(node.name);
        visited.add(node.name);
        result.push(node.name);
    }

    for (const node of graph.getAllNodes()) {
        dfs(node);
    }

    return result.reverse(); 
}


const dag = new DAG();

dag.addEdge("A", "C");
dag.addEdge("A", "B");
dag.addEdge("B", "C");
dag.addEdge("B", "E");
dag.addEdge("C", "D");
console.log(topologicalSort(dag))