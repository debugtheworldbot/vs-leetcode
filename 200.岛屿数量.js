/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid.length === 0) return 0;
  let res = 0;
  const helper = (grid, i, j, rows, cols) => {
    if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === "0")
      return;
    grid[i][j] = "0";

    helper(grid, i + 1, j, rows, cols);
    helper(grid, i, j + 1, rows, cols);
    helper(grid, i - 1, j, rows, cols);
    helper(grid, i, j - 1, rows, cols);
  };
  const rows = grid.length;
  const cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        helper(grid, i, j, rows, cols);
        res++;
      }
    }
  }
  return res;
};
// @lc code=end
