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
    let pre = '1', cur = '1'
    for (let i = 1; i < n; i++) {
        pre = cur
        cur = ''
        let left = 0, right = 0
        while (right < pre.length) {
            while (pre[left] === pre[right] && right < pre.length) {
                right++
            }
            cur += (right - left).toString() + pre[left]
            left = right
        }
    }
    return cur
};
// @lc code=end

