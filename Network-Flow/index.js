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

function fordFulkerson(graph, sourceName, sinkName) {
  const source = graph.getNodeByName(sourceName);
  const sink = graph.getNodeByName(sinkName);
  let maxFlow = 0;

  while (true) {
    const visited = new Set();
    const flow = dfs(source, sink, Infinity, visited);

    if (flow === 0) break;

    maxFlow += flow;
  }

  return maxFlow;
}

function dfs(current, sink, flow, visited) {
  if (current === sink) return flow;
  visited.add(current);

  for (const edge of current.edges) {
    const residual = edge.capacity - edge.flow;

    if (residual > 0 && !visited.has(edge.to)) {
      const bottleneck = dfs(edge.to, sink, Math.min(flow, residual), visited);
      if (bottleneck > 0) {
        edge.flow += bottleneck;
        edge.reverse.flow -= bottleneck;
        return bottleneck;
      }
    }
  }

  return 0;
}
function printFlows(graph) {
  for (const node of graph.nodes) {
    for (const edge of node.edges) {
      if (edge.capacity > 0) {
        console.log(`${node.name} -> ${edge.to.name} | flow: ${edge.flow}/${edge.capacity}`);
      }
    }
  }
}

const maxFlow = fordFulkerson(gh, "A", "C"); 
console.log("Maximum Flow:", maxFlow); 
printFlows(gh);
