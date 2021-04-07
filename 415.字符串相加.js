/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let l1 = num1.length - 1, l2 = num2.length - 1
    let ans = []
    let add = 0
    while (l1 >= 0 || l2 >= 0 || add !== 0) {
        const x = l1 >= 0 ? num1.charAt(l1) - '0' : 0
        const y = l2 >= 0 ? num2.charAt(l2) - '0' : 0
        const result = x + y + add
        ans.push(result % 10)
        add = Math.floor(result / 10)
        l1--
        l2--
    }
    return ans.reverse().join('')
};
// @lc code=end

