class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !p || !q) return null;

  function dfs(node: TreeNode | null): TreeNode | null {
    if (!node) return null;

    if (node === p || node === q) return node;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (left && right) return node;

    return left ?? right;
  }

  return dfs(root);
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(a: TreeNode | null, b: TreeNode | null): boolean {
  if (!a && !b) return true;
  if (!a || !b) return false;
  if (a.val !== b.val) return false;
  return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
}

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  function dfs(node: TreeNode) {
    let left = node.left;
    let right = node.right;
    node.left = right;
    node.right = left;
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  return root;
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const result: number[][] = [];
  function bfs(root: TreeNode): void {
    const queue: [TreeNode, number][] = [[root, 0]];

    while (queue.length) {
      const [node, level] = queue.shift()!;

      if (!result[level]) result[level] = [];
      result[level].push(node.val);

      if (node.left) queue.push([node.left, level + 1]);
      if (node.right) queue.push([node.right, level + 1]);
    }
  }

  bfs(root!);
  return result;
}

function maxDepth(root: TreeNode | null): number {}
const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log("+++", maxDepth(root));
