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

const root = new TreeNode(
  3,
  new TreeNode(
    5,
    new TreeNode(6),
    new TreeNode(2, new TreeNode(7), new TreeNode(4))
  ),
  new TreeNode(1, new TreeNode(0), new TreeNode(8))
);

const p = root.left;
const q = root.right;


function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    
};