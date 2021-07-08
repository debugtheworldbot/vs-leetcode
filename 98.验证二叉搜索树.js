/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const validate = (root, min, max) => {
    if (!root) return true;
    if (!!min && root.val <= min.val) return false;
    if (!!max && root.val >= max.val) return false;
    return validate(root.left, min, root) && validate(root.right, root, max);
  };
  return validate(root, null, null);
};
// @lc code=end
