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

const findMedianSortedArrays = function (nums1, nums2) {
  let target = [];
  while (nums1.length || nums2.length) {
    const n1 = nums1[0];
    const n2 = nums2[0];

    if (n1 === undefined) {
      target = [...target, ...nums2];
      break;
    }

    if (n2 === undefined) {
      target = [...target, ...nums1];
      break;
    }

    if (n1 !== undefined && n2 !== undefined) {
      if (n1 > n2) {
        target.push(nums2.shift());
      } else {
        target.push(nums1.shift());
      }
    }
  }

  let targetLen = target.length;
  return targetLen % 2 == 0
    ? (target[targetLen / 2] + target[targetLen / 2 - 1]) / 2
    : target[Math.floor(targetLen / 2)];
};

console.log(findMedianSortedArrays([0, 0], [0, 0]));
