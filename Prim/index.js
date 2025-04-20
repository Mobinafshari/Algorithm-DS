const graph = {
  0: [
    [1, 2],
    [3, 6],
  ],
  1: [
    [0, 2],
    [2, 3],
    [3, 8],
    [4, 5],
  ],
  2: [
    [1, 3],
    [4, 7],
  ],
  3: [
    [0, 6],
    [1, 8],
    [4, 9],
  ],
  4: [
    [1, 5],
    [2, 7],
    [3, 9],
  ],
};

function primMST(graph, startNode = 0) {
  const visited = [startNode];
  const nodes = Object.keys(graph).map(Number);
  let weight = 0;

  while (visited.length < nodes.length) {
    let shortest = null;

    for (let node of visited) {
      for (let [neighbor, w] of graph[node]) {
        if (!visited.includes(neighbor)) {
          if (!shortest || w < shortest[2]) {
            shortest = [node, neighbor, w];
          }
        }
      }
    }

    if (shortest) {
      visited.push(shortest[1]);
      weight += shortest[2];
    }
  }

  return weight;
}

console.log(primMST(graph));
