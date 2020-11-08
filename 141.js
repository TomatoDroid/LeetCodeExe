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
 * 空间复杂度为---O(n)
 */
/*
const hasCycle = function (head) {
    const map = new Map()
    let cur = head
    while(cur) {
        if(map.has(cur.next)) {
            return true
        } else {
            cur = cur.next
            map.set(cur)
        }
    }
    return false
}
*/
/**
 * @param {ListNode} head
 * @return {boolean}
 * 空间复杂度为---O(1)
 */
const hasCycle = function (head) {
  if (head === null || head.next === null) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
