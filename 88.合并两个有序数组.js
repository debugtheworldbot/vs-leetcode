/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1, total = m + n - 1
    while (p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[total] = nums1[p1]
            p1--
        } else {
            nums1[total] = nums2[p2]
            p2--
        }
        total--
    }
};
// @lc code=end

