// 两数相加[链表结构]
/**
  生成新的结点： new ListNode

  输入：l1 = [2,4,3], l2 = [5,6,4]
  输出：[7,0,8]
  解释：342 + 465 = 807.
  
  输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  输出：[8,9,9,9,0,0,0,1]
*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addTwoNumbers = function(l1, l2) {
  let head = null, tail = null;
  let carry = 0;

  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + carry;

    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }

    carry = sum > 9 ? 1 : 0;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry) {
    tail.next = new ListNode(1);
  }

  return head;
}