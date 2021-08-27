/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const words = paragraph
    .replace(/[^\w\s]|_/g, " ")
    .toLocaleLowerCase()
    .split(" ")
    .filter(Boolean)
    .filter((w) => !banned.includes(w))
  const map = new Map()
  const max = { name: "", count: 0 }
  for (let i = 0; i < words.length; i++) {
    const target = words[i]
    if (map.has(target)) {
      const count = map.get(target) + 1
      if (max.count < count) {
        max.name = target
        max.count = count
      }
      map.set(target, map.get(target) + 1)
    } else {
      if (!max.name) {
        max.name = target
        max.count = 1
      }
      map.set(target, 1)
    }
  }
  return max.name
}

// @lc code=end
