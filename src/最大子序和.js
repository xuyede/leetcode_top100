// https://leetcode-cn.com/problemset/leetcode-hot-100/

// 最大子序和
/**
  给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

  输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
  输出：6
  解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
*/

const maxSubArray = function(nums) {
  let pre = 0,
      maxNum = nums[0];

  nums.forEach(num => {
    pre = Math.max(pre + num, num);
    maxNum = Math.max(pre, maxNum);
  })

  return maxNum
}

console.log(
  maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
)