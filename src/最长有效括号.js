// https://leetcode-cn.com/problemset/leetcode-hot-100/

// 最长有效括号
/**
  给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度

  输入：s = "(()"
  输出：2
  解释：最长有效括号子串是 "()"
  示例 2：

  输入：s = ")()())"
  输出：4
  解释：最长有效括号子串是 "()()"
  示例 3：

  输入：s = ""
  输出：0
*/


const longestValidParentheses = function(s) {
  const stack = [];
  let maxLength = 0;
  
  stack.push(-1);

  for (let i = 0; i < s.length; i++) {
    const currS = s[i];
    if (currS == '(') {
      stack.push(i);
    } else if (currS == ')') {
      stack.pop();
      if (stack.length == 0) {
        stack.push(i);
      } else {
        maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
      }
    }
  }

  return maxLength;
}

console.log(
  longestValidParentheses(')()())')
)