/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 时间复杂度O(n)， 空间复杂度O(n)
 */
// var detectCycle = function (head) {
//   let set = new Set();

//   while (head) {
//     if (set.has(head)) {
//       return head;
//     } else {
//       set.add(head);
//     }
//     head = head.next;
//   }
//   return null;
// };

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 时间复杂度O(n)， 空间复杂度O(1)
 */
var detectCycle = function (head) {
  let slowNode = head;
  let fastNode = head;

  while (slowNode) {
    slowNode = slowNode.next;
    if (fastNode.next) {
      fastNode = fastNode.next.next;
    } else {
      return null;
    }
    if (fastNode === slowNode) {
      let ptr = head;
      while (ptr !== slowNode) {
        ptr = ptr.next;
        slowNode = slowNode.next;
      }
      return ptr;
    }
  }
  return null;
};
