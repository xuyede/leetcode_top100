
// 有效的括号
/**
  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

  输入：s = "()"
  输出：true

  输入：s = "()[]{}"
  输出：true

  输入：s = "(]"
  输出：false

  输入：s = "([)]"
  输出：false
*/

const charEnum = {
  '{': 1,
  '}': -1,
  '[': 2,
  ']': -2,
  '(': 3,
  ')': -3
}

const isValid = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (i == 0 && charEnum[s[i]] < 0) {
      return false
    }

    if (charEnum[s[i]] > 0) {
      stack.push(s[i]);
    } else {
      const lastChar = stack[stack.length - 1];
      if (charEnum[lastChar] + charEnum[s[i]] == 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length == 0;
}

console.log(
  isValid(')()')
)