/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
    // let cur = head
    // let prev = null
    // while (cur){
    //     let tep_next = cur.next
    //     cur.next=prev
    //     prev = cur
    //     cur = tep_next
    // }
    // return prev 
    return reverse(null, head)

};
var reverse = function (prev, cur) {
    if (!cur) return prev
    let tep_next = cur.next
    cur.next = prev
    return reverse(cur, tep_next)
}
// @lc code=end

