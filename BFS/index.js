function bfs(graph, startNode) {
  let iteratedNodes = [];

  function pop(arr = []) {
    let firstChild = arr.shift();
    if (firstChild) {
      arr.push(
        ...graph[firstChild].filter(
          (ele) => !iteratedNodes.includes(ele) && !arr.includes(ele)
        )
      );
      iteratedNodes.push(firstChild);
    }
    console.log("=>", arr);
  }

  let array = [startNode];
  while (array.length > 0) {
    pop(array);
  }

  console.log("BFS Traversal Order:", iteratedNodes);
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

bfs(graph, "A");
