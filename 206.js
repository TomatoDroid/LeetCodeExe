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
 */
const reverseList = function (head) {
  let [prev, cur] = [null, head];

  while (cur) {
    [cur.next, prev, cur] = [prev, cur, cur.next];
  }

  return prev;
};

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
console.log(listToString(one))

const reverseNode = reverseList(one)

console.log(listToString(reverseNode))