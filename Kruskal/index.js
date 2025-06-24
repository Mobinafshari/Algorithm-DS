function kruskal(numNodes, edges) {
  const sortedEdges = edges.sort((a, b) => a.weight - b.weight);
  const MST = [];
  for (edge of sortedEdges) {
    cycleCheck(edge);
  }
  function cycleCheck(edge) {
    const { from, to, weight } = edge;
    let existed = from;
    while (existed !== -1) {
      existedObj = MST.find((e) => e.from === existed);
      if (existedObj === undefined) break;
      existed = existedObj?.to;
    }
    console.log("===>", to, existed);
    if (existed === to) return;
    MST.push({ from, to, weight });
  }
  // return MST;
}

const edges = [
  { from: 0, to: 1, weight: 1 },
  { from: 0, to: 3, weight: 3 },
  { from: 0, to: 2, weight: 4 },
  { from: 1, to: 2, weight: 2 },
  { from: 2, to: 3, weight: 5 },
  { from: 2, to: 4, weight: 6 },
  { from: 3, to: 4, weight: 7 },
];

console.log(kruskal(5, edges));
