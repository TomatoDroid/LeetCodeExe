/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 时间复杂度 : O(n) 递归
 */
// var isValidBST = function (root) {
//   return helper(root, -Infinity, Infinity);
// };

// function helper(root, min, max) {
//   if (root === null) {
//     return true;
//   }
//   if (min !== null && root.val <= min) {
//     return false;
//   }
//   if (max !== null && root.val >= max) {
//     return false;
//   }

//   return helper(root.left, min, root.val) && helper(root.right, root.val, max);
// }

/**
 * TODO 根据二叉搜索树的特性，中序遍历的结果为升序
 * 时间复杂度 : O(n)
 */
var isValidBST = function (root) {
  
};
