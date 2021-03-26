// 两数之和
/**
  输入：nums = [2,7,11,15], target = 9
  输出：[0,1]
  解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
*/

const twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // 目标值与当前值的差值
    let gapNum = target - num;
    if (map.has(gapNum)) {
      // 如果差值存在于map中，说明 gapNum和num的value值【索引】就是答案
      return [map.get(gapNum), i];
    } 
    
    // 把当前的索引存到map中
    map.set(num, i);
  }
}

console.log(
  twoSum([1, 2, 3, 4], 6)
)