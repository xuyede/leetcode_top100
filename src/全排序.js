// https://leetcode-cn.com/problemset/leetcode-hot-100/

// 全排列
/**
  给定一个 没有重复 数字的序列，返回其所有可能的全排列。

  输入: [1,2,3]
  输出:
    [
      [1,2,3],
      [1,3,2],
      [2,1,3],
      [2,3,1],
      [3,1,2],
      [3,2,1]
    ]
*/

const permute = function(nums) {
  let ret = [];
  let len = nums.length;
  dfs(nums, 0, [], '', ret);

  return ret;

  function dfs(nums, level, path, pathItem, ret) {
    if (pathItem !== '' && !path.includes(pathItem)) {
      path.push(pathItem);
    }
    
    if (level >= len) {
      if (path.length >= len) {
        ret.push(path);
      }
      return;
    }

    for (let i = 0; i < len; i++) {
      dfs(nums, level + 1, [...path], nums[i], ret);
    }
  }
}

console.log(
  permute([-1, 0, 1])
)