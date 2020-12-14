/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 时间复杂度O(N)
 */
var levelOrder = function (root) {
    const res = []
    if (!root) {
        return res
    }

    const queue = []
    queue.push(root)

    while (queue.length) {
        const currentLevelSize = queue.length
        res.push([])

        for (let i = 0; i < currentLevelSize; i++) {
            const node = queue.shift()
            res[res.length - 1].push(node.val)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return res
}