/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const tag = {};
  const dfs = (select) => {
    if (select.length === nums.length) {
      return res.push(select.slice());
    }
    for (const n of nums) {
      if (tag[n]) continue;
      select.push(n);
      tag[n] = true;
      dfs(select);
      select.pop();
      tag[n] = false;
    }
  };
  dfs([]);
  return res;
};
// @lc code=end
