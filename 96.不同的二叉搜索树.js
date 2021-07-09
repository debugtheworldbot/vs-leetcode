/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const memo = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 })
  );

  const count = (low, high) => {
    if (low > high) return 1;
    if (memo[low][high]) return memo[low][high];
    let res = 0;
    for (let i = low; i <= high; i++) {
      const left = count(low, i - 1);
      const right = count(i + 1, high);
      res += left * right;
    }
    memo[low][high] = res;
    return res;
  };

  return count(1, n);
};
// @lc code=end
