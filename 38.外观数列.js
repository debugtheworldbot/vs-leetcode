/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return '1'
    }
    let pre = countAndSay(n - 1)
    let result = '', left = 0, right = 0
    while (right < pre.length) {
        while (pre[left] === pre[right] && right < pre.length) {
            right++
        }
        result += (right - left).toString() + pre[left]
        left = right
    }
    return result

};
// @lc code=end

