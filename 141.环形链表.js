/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head) return false
    let slow = head
    let fast = head.next
    while (slow !== fast) {
        if (!fast || !fast.next) return false
        slow = slow.next
        fast = fast.next.next
    }
    return true
    // if (!head) return false
    // const list = [head]
    // while (head.next !== null) {
    //     if (list.indexOf(head.next) === -1) {
    //         list.push(head.next)
    //         head = head.next
    //     } else {
    //         return true
    //     }
    // }
    // return false

};
// @lc code=end

