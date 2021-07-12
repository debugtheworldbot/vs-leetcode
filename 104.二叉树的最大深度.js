/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  const traverse = (r, dep) => {
    if (!r) return dep;
    const left = traverse(r.left, dep) + 1;
    const right = traverse(r.right, dep) + 1;
    return Math.max(left, right);
  };
  return traverse(root, 0);
};
// @lc code=end
