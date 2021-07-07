/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */

var constructMaximumBinaryTree = function (nums) {
  const build = (nums, lo, hi) => {
    if (lo > hi || lo < 0 || hi < 0) {
      return null;
    }
    let max = -1;
    let index = -1;
    for (let i = lo; i <= hi; i++) {
      if (nums[i] > max) {
        max = nums[i];
        index = i;
      }
    }
    // get max value and index
    const root = new TreeNode(max);
    root.left = build(nums, lo, index - 1);
    root.right = build(nums, index + 1, hi);
    // generate root
    return root;
  };
  return build(nums, 0, nums.length - 1);
};
// @lc code=end
