/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * 反转链表
 * @param {*} head
 */
function reverse(head) {
  let [pre, cur] = [null, head];
  while (cur) {
    [cur.next, pre, cur] = [pre, cur, cur.next];
  }
  return pre;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let dummyNode = new ListNode(0);
  dummyNode.next = head;

  let pre = dummyNode;
  let end = dummyNode;
  while (end.next) {
    for (let i = 0; i < k && end !== null; i++) {
      end = end.next;
    }
    if (!end) {
      break;
    }
    let start = pre.next;
    // nextGroupFirstNode
    let nextGFN = end.next;
    end.next = null;
    pre.next = reverse(start);
    start.next = nextGFN;

    pre = start;
    end = pre;
  }
  return dummyNode.next;
};

// test
const one = new ListNode(1);
const two = new ListNode(2);
// const three = new ListNode(3);
// const four = new ListNode(4);
// const five = new ListNode(5);

one.next = two;
// two.next = three;
// three.next = four;
// four.next = five;
// five.next = null;

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

const swapNode = reverseKGroup(one, 2);

console.log(listToString(swapNode));
