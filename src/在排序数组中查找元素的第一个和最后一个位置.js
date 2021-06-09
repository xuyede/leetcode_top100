// https://leetcode-cn.com/problemset/leetcode-hot-100/

// 在排序数组中查找元素的第一个和最后一个位置
/**
  给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
  如果数组中不存在目标值 target，返回 [-1, -1]。

  输入：nums = [5,7,7,8,8,10], target = 8
  输出：[3,4] 

  输入：nums = [5,7,7,8,8,10], target = 6
  输出：[-1,-1]

  输入：nums = [], target = 0
  输出：[-1,-1]
*/

// 二分查找
const searchRange = function(nums, target) {
  if (nums.length == 0) return [-1, -1];

  let left = 0;
  let right = tail = nums.length - 1;
  let ret = [];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) {
      for (let i = left; i <= tail; i ++) {
        if (nums[i] == target) {
          if (ret.length >= 2) {
            const pop = Math.max(ret.pop(), i);
            ret.push(pop);
          } else {
            ret.push(i);
          }
        }
      }
      if (ret.length == 1) {
        ret.push(mid);
      }
      break;
    }

    if (nums[left] <= target && nums[mid] >= target ) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (ret.length == 0) {
    ret = [-1, -1];
  }

  return ret;
}

console.log(
  searchRange([1, 1, 1], 1)
)