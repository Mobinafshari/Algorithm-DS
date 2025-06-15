function dijkstra(graph, startNode) {

}

const graph = {
  A: [
    { node: "B", weight: 6 },
    { node: "C", weight: 1 },
  ],
  B: [{ node: "D", weight: 2 }],
  C: [{ node: "E", weight: 1 }],
  D: [{ node: "E", weight: 1 }],
  E: [],
};
console.log(dijkstra(graph, "A"));
