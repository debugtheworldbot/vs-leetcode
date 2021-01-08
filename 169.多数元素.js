/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let result = {}
    const len = nums.length
    for (let i = 0; i < len; i++) {
        if (!result[nums[i]]) {
            result[nums[i]] = 1
        } else {
            result[nums[i]] += 1
        }
        if (result[nums[i]] > len >> 1) return nums[i]
    }

};
// @lc code=end

