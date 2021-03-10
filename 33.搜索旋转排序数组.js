/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums[0] === target) return 0
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        let mid = (l + r) >> 1
        if (nums[mid] === target) return mid
        if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && nums[mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else {
            if (nums[mid] < target && nums[r] >= target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
    return -1
};
// @lc code=end

