// https://leetcode-cn.com/problemset/leetcode-hot-100/
// https://leetcode-cn.com/problems/generate-parentheses/solution/pei-yang-chou-xiang-si-wei-hui-su-jie-fa-7dwu/

// 括号生成
/**
  数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

  输入：n = 3
  输出：["((()))","(()())","(())()","()(())","()()()"]

  输入：n = 1
  输出：["()"]
*/


const generateParenthesis = function(n) {
  const res = [];
  dfs(n, '', 0, 0, res);

  // open: 左括号的数量 close：右括号的数量
  function dfs(n, path, open, close, res) {
    if (open > n || close > n || close > open) {
      return;
    }
    if (path.length >= 2 * n) {
      res.push(path);
      return;
    }

    dfs(n, path + '(', open + 1, close, res);
    dfs(n, path + ')', open, close + 1, res);
  }

  return res;
}

console.log(
  generateParenthesis(4)
)