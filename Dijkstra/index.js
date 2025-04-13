function dijkstra(graph, startNode) {
  function sortDestination(arr) {
    return arr.sort((a, b) => a.weight - b.weight);
  }

  const distances = {};
  const visited = new Set();
  const destination = [];

  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[startNode] = 0;

  destination.push({ node: startNode, weight: 0 });

  while (destination.length > 0) {
    const current = sortDestination(destination).shift();

    if (visited.has(current.node)) continue;
    visited.add(current.node);

    const neighbors = graph[current.node];
    for (const neighbor of neighbors) {
      const totalWeight = current.weight + neighbor.weight;

      if (totalWeight < distances[neighbor.node]) {
        distances[neighbor.node] = totalWeight;
        destination.push({ node: neighbor.node, weight: totalWeight });
      }
    }
  }

  return distances;
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
