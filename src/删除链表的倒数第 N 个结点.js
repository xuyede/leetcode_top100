
// 删除链表的倒数第 N 个结点
/**
  给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

  输入：head = [1,2,3,4,5], n = 2
  输出：[1,2,3,5]

  输入：head = [1], n = 1
  输出：[]

  输入：head = [1,2], n = 1
  输出：[1]
*/

const removeNthFromEnd = function(head, n) {
  if (head.next == null) {
    return null;
  }

  let point1 = head;
  let point2 = head;
  let temp = head;
  let loop = n - 1;

  while (loop--) point2 = point2.next;
  
  while (point2.next) {
    temp = point1;
    point2 = point2.next;
    point1 = point1.next;
  }

  // 删除头节点
  if (point1 == head) {
    head = head.next;
  } else {
    temp.next = point1.next;
    point1.next = null;
  }
  
  return head;
}

console.log(
  removeNthFromEnd('234')
)