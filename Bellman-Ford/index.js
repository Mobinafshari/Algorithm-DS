const graph = [
  { from: 'S', to: 'A', weight: 4 },
  { from: 'S', to: 'E', weight: 5 },
  { from: 'A', to: 'C', weight: 6 },
  { from: 'B', to: 'A', weight: 3 },
  { from: 'C', to: 'B', weight: -2 },
  { from: 'D', to: 'C', weight: 3 },
  { from: 'E', to: 'D', weight: -1 },
];

function bellmanFord(graph, startNode = 'S') {
  let nodes = [];
  graph.map((element) => {
    if (!nodes.includes(element.from)) {
      nodes.push(element.from);
    }
    if (!nodes.includes(element.to)) {
      nodes.push(element.to);
    }
  });

  const dist = {
    [startNode]: 0,
  };

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i] !== startNode) {
      dist[nodes[i]] = Infinity;
    }
  }

  for (let i = 0; i < nodes.length - 1; i++) {
    graph.map((edge) => {
      if (dist[edge.from] + edge.weight < dist[edge.to]) {
        dist[edge.to] = dist[edge.from] + edge.weight;
      }
    });
  }

  for (let i = 0; i < graph.length; i++) {
    const { from, to, weight } = graph[i];
    if (dist[from] + weight < dist[to]) {
      return;
    }
  }

  console.log(dist);
}

bellmanFord(graph);
