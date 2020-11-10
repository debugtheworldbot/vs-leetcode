/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let pre = 0, maxAns = nums[0]
    nums.map(n => {
        pre = Math.max(pre + n, n)
        maxAns = Math.max(pre, maxAns)
    })
    return maxAns
};

// @lc code=end

