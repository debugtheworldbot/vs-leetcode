/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, val) {
  const findMin = (root) => {
    while (root.left) {
      root = root.left;
    }
    return root;
  };
  if (!root) return null;
  if (root.val === val) {
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    const newRootVal = findMin(root.right);
    root.val = newRootVal.val;
    root.right = deleteNode(root.right, newRootVal.val);
  }
  if (root.val < val) {
    root.right = deleteNode(root.right, val);
  }
  if (root.val > val) {
    root.left = deleteNode(root.left, val);
  }
  return root;
};
// @lc code=end
