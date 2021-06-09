// https://leetcode-cn.com/problemset/leetcode-hot-100/

// 组合总和
/**
  给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
  candidates 中的数字可以无限制重复被选取。
  说明：
    所有数字（包括 target）都是正整数。
    解集不能包含重复的组合。 

  输入：candidates = [2,3,6,7], target = 7,
  所求解集为：
  [
    [7],
    [2,2,3]
  ]

  输入：candidates = [2,3,5], target = 8,
  所求解集为：
  [
    [2,2,2,2],
    [2,3,3],
    [3,5]
  ]
  
*/

const combinationSum = function(candidates, target) {
  let ret = [];

  function dfs(start, arr, sum) {
    if (sum >= target) {
      if (sum == target) {
        ret.push(arr.slice());
      }
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      arr.push(candidates[i])
      // 传当前的树去递归，3 -> 只能是3 && 3后面的数去计算和，避免重复的组合
      dfs(i, arr, sum + candidates[i]);
      // 找到符合要求的后，去除最后一个，试一下其他的组合
      arr.pop()
    }
  }

  dfs(0, [], 0);
  return ret;
}

console.log(
  combinationSum([2,3,5], 8)
)