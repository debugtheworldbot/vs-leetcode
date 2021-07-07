/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const build = (inStart, inEnd, postStart, postEnd) => {
    if (inStart > inEnd) return null;
    const rootVlaue = postorder[postEnd];
    let inorderIndex = 0;
    for (let i = inStart; i <= inEnd; i++) {
      if (inorder[i] === rootVlaue) {
        inorderIndex = i;
      }
    }
    const root = new TreeNode(rootVlaue);
    const leftSize = inorderIndex - inStart;
    root.left = build(
      inStart,
      inorderIndex - 1,
      postStart,
      postStart + leftSize - 1
    );
    root.right = build(
      inorderIndex + 1,
      inEnd,
      postStart + leftSize,
      postEnd - 1
    );
    return root;
  };
  return build(0, inorder.length - 1, 0, postorder.length - 1);
};
// @lc code=end
