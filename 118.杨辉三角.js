/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const result = []
    for (let i = 0; i < numRows; i++) {
        const arr = new Array(i + 1).fill(1)
        for (let j = 1; j < arr.length - 1; j++) {
            arr[j] = result[i - 1][j - 1] + result[i - 1][j]
        }
        result.push(arr)
    }
    return result

};
// @lc code=end
