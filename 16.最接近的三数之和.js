/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    const len = nums.length
    let res = nums[0] + nums[1] + nums[len - 1]
    for (let i = 0; i < len - 2; i++) {
        const n1 = nums[i]
        let l = i + 1
        let r = len - 1
        while (l < r) {
            const n2 = nums[l]
            const n3 = nums[r]
            const sum = n1 + n2 + n3
            if (sum > target) {
                r--
            } else {
                l++
            }
            if (Math.abs(sum - target) < Math.abs(res - target)) res = sum
        }
    }
    return res
};
// @lc code=end

