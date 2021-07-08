/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */

var findDuplicateSubtrees = function (root) {
  const map = new Map();
  const res = [];
  const traverse = (root) => {
    if (!root) return "#";
    const left = traverse(root.left);
    const right = traverse(root.right);

    const subTree = left + "," + right + "," + root.val;
    if (!map.has(subTree)) {
      map.set(subTree, 1);
    } else {
      const freq = map.get(subTree);
      if (freq === 1) {
        res.push(root);
      }
      map.set(subTree, freq + 1);
    }
    return subTree;
  };
  traverse(root);
  return res;
};
// @lc code=end
