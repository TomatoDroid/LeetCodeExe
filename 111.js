/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 时间复杂度O(N)
 *  DFS recursion
 */
var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left) return 1 + minDepth(root.right);
  if (!root.right) return 1 + minDepth(root.left);

  const leftMinDepth = minDepth(root.left);
  const rightMinDepth = minDepth(root.right);
  return 1 + Math.min(leftMinDepth, rightMinDepth);
};

/**
 * @param {TreeNode} root
 * @return {number}
 * 时间复杂度O(N)
 * BFS
 */
var minDepth = function (root) {
  if (!root) return 0;
  let res = 1;
  const queue = [];
  queue.push(root);

  while (queue.length) {
    let length = queue.length;
    while (length) {
      const node = queue.shift();
      if (!node.left && !node.right) return res;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      length--;
    }
    res++;
  }
  return res;
};
