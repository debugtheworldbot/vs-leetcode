/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let r = 0
    let ans = 0
    const a = new Set()
    for (let i = 0; i < s.length; i++) {
        if (i !== 0) {
            a.delete(s.charAt(i - 1))
        }
        while (r < s.length && !a.has(s.charAt(r))) {
            a.add(s.charAt(r))
            r += 1
        }
        ans = Math.max(r - i, ans)
    }
    return ans
};
// @lc code=end

