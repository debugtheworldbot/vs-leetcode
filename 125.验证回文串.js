/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const filter = (str) => {
    return str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "").toLowerCase()
}
var isPalindrome = function (s) {
    const str = filter(s)
    const mid = str.length >> 1
    for (let i = 0; i < mid; i++) {
        if (str[i] !== str[str.length - i - 1]) return false
    }
    return true
};
// @lc code=end

