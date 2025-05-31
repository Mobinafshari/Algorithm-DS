const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};


function bfs(graph, start) {
  const visited = new Set();
  const queue = [];

  function visit(node) {
    if (visited.has(node)) return;
    console.log('===>', node);
    visited.add(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }

  visit(start);

  while (queue.length !== 0) {
    const nextNode = queue.shift();
    visit(nextNode);
  }

  return Array.from(visited);
}

console.log(bfs(graph , 'A'))