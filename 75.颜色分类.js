/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let r = nums.length - 1
    let l = 0
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === 2 && i <= r) {
            nums[i] = nums[r]
            nums[r] = 2
            r--
        }
        if (nums[i] === 0) {
            nums[i] = nums[l]
            nums[l] = 0
            l++
        }
    }
    return nums
};
// @lc code=end

