function dijkstra(graph, startNode) {
  const shortestPaths = new Map();
  const visited = new Set();

  Object.keys(graph).forEach((node) =>
    shortestPaths.set(node, node === startNode ? 0 : Infinity)
  );

  const queue = [startNode];

  while (queue.length > 0) {
    let currentNode = queue.reduce((minNode, node) => {
      console.log(minNode, node);
      return shortestPaths.get(node) < shortestPaths.get(minNode) ? node : minNode;
    });
    queue.splice(queue.indexOf(currentNode), 1);
    visited.add(currentNode);

    for (const { node: neighbor, weight } of graph[currentNode]) {
      if (visited.has(neighbor)) continue;

      const currentDist = shortestPaths.get(currentNode) + weight;
      if (currentDist < shortestPaths.get(neighbor)) {
        shortestPaths.set(neighbor, currentDist);
        queue.push(neighbor);
      }
    }
  }

  return [...shortestPaths];
}

const graph = {
  A: [
    { node: "B", weight: 4 },
    { node: "C", weight: 2 },
  ],
  B: [
    { node: "C", weight: 1 },
    { node: "D", weight: 5 },
  ],
  C: [
    { node: "D", weight: 8 },
    { node: "E", weight: 10 },
  ],
  D: [
    { node: "E", weight: 2 },
    { node: "F", weight: 6 },
  ],
  E: [{ node: "F", weight: 2 }],
  F: [],
  G: [],
};

console.log(dijkstra(graph, "A"));
