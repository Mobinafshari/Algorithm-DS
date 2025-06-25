type EdgeType = {
  from: number;
  to: number;
  weight: number;
};
type EdgesType = EdgeType[];

function kruskal(numNodes: number, edges: EdgesType): EdgesType {
  const sortedEdges = edges.sort((a, b) => a.weight - b.weight);
  const MST: EdgesType = [];

  const parent = Array.from({ length: numNodes }, (_, i) => i);

  function find(u: number): number {
    if (parent[u] !== u) {
      parent[u] = find(parent[u]);
    }
    return parent[u];
  }

  function union(u: number, v: number): boolean {
    const rootU = find(u);
    const rootV = find(v);
    if (rootU === rootV) return false;
    parent[rootV] = rootU;
    return true;
  }

  for (const edge of sortedEdges) {
    if (union(edge.from, edge.to)) {
      MST.push(edge);
    }
  }

  return MST;
}

const edges = [
  { from: 0, to: 1, weight: 1 },
  { from: 1, to: 2, weight: 2 },
  { from: 0, to: 2, weight: 4 },
  { from: 0, to: 3, weight: 3 },
  { from: 2, to: 3, weight: 5 },
  { from: 2, to: 4, weight: 6 },
  { from: 3, to: 4, weight: 7 },
];

console.log(kruskal(5, edges));
