const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F", "G"],
  D: ["H"],
  E: [],
  F: ["I"],
  G: [],
  H: [],
  I: []
};

function dfs(graph, start) {
  const visited = new Set();

  function visit(node) {
    if (visited.has(node)) return;
    visited.add(node);
    for (const neighbor of graph[node]) {
      visit(neighbor);
    }
  }

  visit(start);
  return Array.from(visited);
}

console.log(dfs(graph, 'A'));
