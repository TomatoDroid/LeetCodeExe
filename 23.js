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
 * 递归 时间复杂度O(n)， 空间复杂度O(n)：取决于递归的深度
 */
// const swapPairs = function (head) {
//   if (!head || !head.next) {
//     return head;
//   }

//   let newHead = head.next

//   head.next = swapPairs(newHead.next);
//   newHead.next = head;

//   return newHead;
// };

/**
 *  迭代 时间复杂度 空间复杂度均为O(1)
 */
const swapPairs = function (head) {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  let temp = dummyHead;
  while (temp.next && temp.next.next) {
    let node1 = temp.next;
    let node2 = temp.next.next;

    [temp.next, node1.next, node2.next, temp] = [node2, node2.next, node1, node1];
  }
  return dummyHead.next;
};

// test
const one = new ListNode(1);
const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);
const five = new ListNode(5);

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = null;

function listToString(head) {
  let str = "";
  let cur = head;
  while (cur) {
    str += `${cur.val} ->`;
    cur = cur.next;
  }
  return str;
}
console.log(listToString(one));

const swapNode = swapPairs(one);

console.log(listToString(swapNode));
