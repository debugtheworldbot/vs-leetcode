/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    if (!grid) return 0
    const m = grid[0].length
    const row = grid.length
    for (let i = 1; i < m; i++) {
        grid[0][i] = grid[0][i] + grid[0][i - 1]
    }
    for (let j = 1; j < row; j++) {
        grid[j][0] = grid[j][0] + grid[j - 1][0]
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < m; j++) {
            grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j]
        }
    }
    return grid[row - 1][m - 1]
};
// @lc code=end

