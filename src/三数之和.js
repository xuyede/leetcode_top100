
// 三数之和
/**
  给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
  使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

  输入：nums = [-1,0,1,2,-1,-4]
  输出：[[-1,-1,2],[-1,0,1]]

  输入：nums = []
  输出：[]

  输入：nums = [0]
  输出：[]
*/

const threeSum = function(nums) {
  let len = nums.length;
  if (!nums || len < 3) {
    return [];
  }

  nums = nums.sort((a, b) => a - b);

  let ret = [];

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let head = i + 1;
    let tail = len - 1;
    while(head < tail) {
      const sum = nums[i] + nums[head] + nums[tail];
      if (sum === 0) {
        ret.push([nums[i], nums[head], nums[tail]]);
        while (head<tail && nums[head] == nums[head+1]) head++;
        while (head<tail && nums[tail] == nums[tail-1]) tail--; 
        head++;
        tail--;
      } else if (sum > 0) {
        tail--;
      } else if (sum < 0){
        head++;
      }
    }
  }

  return ret;
}

console.log(
  threeSum([-1,0,0,1, 1])
)