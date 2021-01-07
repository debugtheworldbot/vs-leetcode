/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA | !headB) return null
    let a = headA
    let b = headB
    const map = new Map()
    while (a) {
        map.set(a, 1)
        a = a.next
    }
    while (b) {
        if (map.has(b)) return b
        b = b.next
    }
    return null

};
// @lc code=end

