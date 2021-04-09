/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const len = s.length
    if (len % 2 === 1) return false
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stack = []
    const list = s.split('')
    for (let i = 0; i < list.length; i++) {
        const ch = list[i]
        if (pairs.has(ch)) {
            if (!stack.length || pairs.get(ch) !== stack[stack.length - 1]) {
                return false
            }
            stack.pop()
        } else {
            stack.push(ch)
        }
    }
    return !stack.length


};
// @lc code=end

