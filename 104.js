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
 * 递归
 * 时间复杂度O(n), 空间复杂度O(height)height为二叉树的高度
 */
var maxDepth = function(root) {
    if (!root) {
        return 0
    } else {
        const left = maxDepth(root.left)
        const right = maxDepth(root.right)
        return Math.max(left, right) + 1
    }
}

/**
 * @param {TreeNode} root
 * @return {number}
 * BFS
 * 时间复杂度O(n), 空间复杂度O(n)最坏的情况
 */
var maxDepth = function(root) {
    if (!root) {
        return 0
    }
    const queue = []
    queue.push(root)
    let res = 0

    while(queue.length) {
        let length = queue.length
        while (length) {
            const node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right) 
            length--
        }
        res++
    }
    return res
}