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
const helper = (l, r, m, i) => {
    return { lSum: l, rSum: r, mSum: m, iSum: i }
}
const pushUp = (l, r) => {
    const iSum = l.iSum + r.iSum
    const lSum = Math.max(l.lSum, l.iSum + r.lSum)
    const rSum = Math.max(r.rSum, l.rSum + r.iSum)
    const mSum = Math.max(l.rSum + r.lSum, l.mSum, r.mSum)
    return helper(lSum, rSum, mSum, iSum)
}
const getInfo = (a, l, r) => {
    if (l === r) return helper(a[l], a[l], a[l], a[l])
    const m = (l + r) >> 1
    const leftSub = getInfo(a, l, m)
    const rightSub = getInfo(a, m + 1, r)
    return pushUp(leftSub, rightSub)
}
var maxSubArray = function (nums) {
    return getInfo(nums, 0, nums.length - 1).mSum
};

// @lc code=end

