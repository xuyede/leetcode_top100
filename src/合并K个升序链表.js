// https://leetcode-cn.com/problemset/leetcode-hot-100/

// 合并K个升序链表
/**
  给你一个链表数组，每个链表都已经按升序排列。
  请你将所有链表合并到一个升序链表中，返回合并后的链表。

  输入：lists = [[1,4,5],[1,3,4],[2,6]]
  输出：[1,1,2,3,4,4,5,6]
  解释：链表数组如下：
  [
    1->4->5,
    1->3->4,
    2->6
  ]
  将它们合并到一个有序链表中得到。
  1->1->2->3->4->4->5->6

  输入：lists = []
  输出：[]

  输入：lists = [[]]
  输出：[]
*/


const mergeKLists = function(lists) {
  const k = lists.length;

  if (k == 0) return null;
  if (lists.every(l => !l)) return null;

  let res = null;
  for (let i = 0; i < k; i++) {
    res = mergesTwoList(res, lists[i]);
  }

  return res;

  function mergesTwoList(l1, l2) {
    let head = new ListNode(-1);
    let curr = head;

    while (l1 != null && l2 != null) {
      if (l1.val <= l2.val) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }

      curr = curr.next;
    }

    curr.next = l1 == null ? l2 : l1;
    return head.next;
  }
}

console.log(
  mergeKLists(3)
)