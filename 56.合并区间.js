/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const sortedArr = intervals.sort((a, b) => a[0] - b[0])
    let result = [[sortedArr[0][0], sortedArr[0][1]]]
    for (let i = 0; i < sortedArr.length; i++) {
        const last = result.length - 1
        const l = sortedArr[i][0]
        const r = sortedArr[i][1]
        if (l <= result[last][1]) {
            if (r >= result[last][1]) {
                result[last][1] = r
            }
        } else {
            result.push([l, r])
        }
    }
    return result
};
// @lc code=end

