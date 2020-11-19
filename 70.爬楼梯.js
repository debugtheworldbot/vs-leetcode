/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // let p = 0, q = 0, r = 1
    // for (let i = 0; i < n; i++) {
    //     p = q
    //     q = r
    //     r = q + p
    // }
    // return r
    const mono = [0, 1, 2] //第一项占位 
    for (let i = 3; i <= n; i++) {
        mono[i] = mono[i - 1] + mono[i - 2]
    }
    return mono[n]
};
// @lc code=end

