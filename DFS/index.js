function dfs(graph, startNode) {
  let iteratedNodes = [];

  function pop(arr = []) {
    let lastChild = arr.pop();
    if (lastChild) {
      arr.push(
        ...graph[lastChild]
          .filter((ele) => !iteratedNodes.includes(ele) && !arr.includes(ele))
          .reverse() 
      );
      iteratedNodes.push(lastChild);
    }
    console.log("=>", arr);
  }

  let array = [startNode];
  while (array.length > 0) {
    pop(array);
  }

  console.log("DFS Traversal Order:", iteratedNodes);
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

dfs(graph, "A");
