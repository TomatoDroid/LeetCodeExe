// BFS递归写法
function BFSRecursion(node) {
  const nodes = [];
  if (node) {
    nodes.push(node);
    const children = node.children;
    for (let i = 0; i < children.length; i++) {
      BFS(children[i]);
    }
  }
  return nodes;
}
// BFS非递归写法

// DFS递归写法
// DFS非递归写法
