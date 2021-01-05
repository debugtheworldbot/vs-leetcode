/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let prv = prices[0]
    let result = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prv) {
            result += prices[i] - prv
        }
        prv = prices[i]
    }
    return result

};
// @lc code=end

