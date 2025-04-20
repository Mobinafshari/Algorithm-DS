vertices = ["S", "A", "B", "C", "D"];

edges = [
  ("S", "A", 6),
  ("S", "B", 7),
  ("A", "C", -1),
  ("B", "A", 8),
  ("B", "D", 5),
  ("D", "C", 1),
  ("D", "S", -4),
];

function bellman_ford(vertices, edges, source) {}
