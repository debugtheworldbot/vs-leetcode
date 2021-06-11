/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const result = [];
  const list = s.split("");
  let word = "";
  for (const e of list) {
    if (e === " ") {
      if (word !== "") {
        result.push(word);
      }
      word = "";
    } else {
      word += e;
    }
  }
  if (word !== "") {
    result.push(word);
  }
  return result.reverse().join(" ");
};
// @lc code=end
