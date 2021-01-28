/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    if (num < 10) return num
    let result = num % 10 + addDigits(Math.floor(num / 10))
    return result >= 10 ? addDigits(result) : result
};
// @lc code=end

