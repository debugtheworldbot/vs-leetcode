/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const result = [];
  const inorder = (root) => {
    if (!root) return null;

    inorder(root.left);
    result.push(root.val);
    inorder(root.right);
  };
  const findtwo = () => {
    let nums = result;
    let x = -1,
      y = -1;
    for (let i = 0; i < result.length - 1; i++) {
      if (nums[i + 1] < nums[i]) {
        y = nums[i + 1];
        if (x === -1) {
          x = nums[i];
        } else break;
      }
    }
    return [x, y];
  };
  const recover = (r, count, x, y) => {
    if (r !== null) {
      if (r.val === x || r.val === y) {
        r.val = r.val === x ? y : x;
        if (--count === 0) {
          return;
        }
      }
      recover(r.left, count, x, y);
      recover(r.right, count, x, y);
    }
  };
  inorder(root);
  const [x, y] = findtwo();
  recover(root, 2, x, y);
};
// @lc code=end
