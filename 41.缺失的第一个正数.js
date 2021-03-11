/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const len = nums.length
    for (let i = 0; i < len; i++) {
        if (nums[i] <= 0) {
            nums[i] = len + 1
        }
    }
    for (let i = 0; i < len; i++) {
        const num = Math.abs(nums[i])
        if (nums[i] < len + 1) {
            nums[num - 1] = - Math.abs(nums[num - 1]) //如果有重复值eg:[...1,1]，如果不加绝对值会负负得正
        }
    }
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            return i + 1
        }
    }
    return len + 1

};
// @lc code=end

