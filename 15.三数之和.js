/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) return []
    const sorted = nums.sort((a, b) => a - b)
    const result = []
    for (let l = 0; l < nums.length - 2; l++) {
        if (nums[l] > 0) break;
        if (l > 0 && nums[l] === nums[l - 1]) continue;
        let m = l + 1
        let r = nums.length - 1
        while (m < r) {
            const sum = sorted[l] + sorted[m] + sorted[r]
            if (sum > 0) r--
            else if (sum < 0) m++
            else {
                result.push([sorted[l], sorted[m], sorted[r]])
                while (m < r && sorted[m] === sorted[m + 1]) m++
                while (m < r && sorted[r] === sorted[r - 1]) r--
                m++
                r--
            }
        }
    }
    return result
};
// @lc code=end

