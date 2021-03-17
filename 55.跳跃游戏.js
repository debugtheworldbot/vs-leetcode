/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let len = nums.length
    let maxPos = 0
    for (let i = 0; i < len; i++) {
        if (maxPos >= len - 1) return true
        if (i <= maxPos && nums[i] > maxPos - i) {
            maxPos = i + nums[i]
        }
    }
    return false
};
// @lc code=end

