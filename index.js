// https://leetcode-cn.com/problemset/leetcode-hot-100/

// 寻找两个正序数组的中位数
/**
  给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
  请你找出并返回这两个正序数组的 中位数 。

  输入：nums1 = [1,3], nums2 = [2]
  输出：2.00000
  解释：合并数组 = [1,2,3] ，中位数 2
  
  输入：nums1 = [1,2], nums2 = [3,4]
  输出：2.50000
  解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
*/

const findMedianSortedArrays = function(num1, num2) {
  let ret = [];
  let p1 = 0; 
  let p2 = 0;
}

console.log(
  findMedianSortedArrays([1, 3], [2])
)