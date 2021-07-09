/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  const map = new Map();
  const search = (low, high) => {
    let result = [];
    if (low > high) return [null];
    if (!!map.has(`${low}-${high}`)) return map.get(`${low}-${high}`);
    for (let i = low; i <= high; i++) {
      const left = search(low, i - 1);
      const right = search(i + 1, high);
      for (const leftNode of left) {
        for (const rightNode of right) {
          const root = new TreeNode(i);
          root.left = leftNode;
          root.right = rightNode;
          result.push(root);
          map.set(`${low}-${high}`, result);
        }
      }
    }
    return result;
  };
  return search(1, n);
};
// @lc code=end
