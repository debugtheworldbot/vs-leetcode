/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let i = 0
    const result = []
    while (i < nums.length) {
        const start = i
        i++
        while (i < nums.length && nums[i] === nums[i - 1] + 1) {
            i++
        }
        const end = i - 1
        if (start < end) {
            result.push(nums[start] + '->' + nums[end])
        } else {
            result.push('' + nums[start])
        }
    }
    return result
};
// @lc code=end

