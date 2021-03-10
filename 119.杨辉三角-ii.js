/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let result = [1]
    for (let i = 0; i < rowIndex; i++) {
        result.unshift(0)
        for (let j = 0; j < i + 1; j++) {
            result[j] = result[j] + result[j + 1]
        }
    }
    return result

};
// @lc code=end

