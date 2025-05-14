class Edge {
  constructor(to, capacity, flow, reverse) {
    this.to = to;
    this.capacity = capacity;
    this.flow = flow;
    this.reverse = reverse;
  }
}

class Node {
  constructor(name) {
    this.name = name;
    this.edges = [];
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(name) {
    if (this.nodes.find((n) => n.name === name)) return;
    const node = new Node(name);
    this.nodes.push(node);
  }

  getNodeByName(name) {
    return this.nodes.find((node) => node.name === name);
  }

  addEdge(fromName, toName, capacity) {
    const fromNode = this.getNodeByName(fromName);
    const toNode = this.getNodeByName(toName);

    if (!fromNode || !toNode) {
      throw new Error("Both nodes must exist before adding an edge.");
    }

    const forwardEdge = new Edge(toNode, capacity, 0, null);
    const reverseEdge = new Edge(fromNode, 0, 0, forwardEdge);

    forwardEdge.reverse = reverseEdge;

    fromNode.edges.push(forwardEdge);
    toNode.edges.push(reverseEdge);
  }
}

const gh = new Graph();

gh.addNode("A");
gh.addNode("B");
gh.addNode("C");

gh.addEdge("A", "B", 10);
gh.addEdge("A", "C", 5);
gh.addEdge("B", "C", 15);

console.log("Edges from A:");
console.log(gh.nodes)
gh.getNodeByName("A").edges.forEach((edge) => {
  console.log(
    `to: ${edge.to.name}, capacity: ${edge.capacity}, flow: ${edge.flow}`
  );
});


function fordFulkerson(graph, sourceName, sinkName) {

}
