// https://leetcode-cn.com/problemset/leetcode-hot-100/

// 正则表达式匹配
/**
  给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

  '.' 匹配任意单个字符
  '*' 匹配零个或多个前面的那一个元素
  所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

  输入：s = "aa" p = "a"
  输出：false
  解释："a" 无法匹配 "aa" 整个字符串。
  
  输入：s = "aa" p = "a*"
  输出：true
  解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。

  输入：s = "aab" p = "c*a*b"
  输出：true
  解释：因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。

  输入：s = "mississippi" p = "mis*is*p*."
  输出：false
*/

const isMatch = function (s, p) {
  if (p.indexOf("*") == -1 && p.indexOf(".") == -1) {
    return s === p;
  }

  if (p == ".*") {
    return true;
  }

  let bool = true;
  while (s) {
    let target = p[0];
    let match = p[1];

    if (!target && !match) {
      return false;
    }

    // s = "bbc"  p = "b*."
    if (!match) {
      match = target;
      target = s[0];
    }

    if (["*", "."].includes(match)) {
      if (match == "*") {
        // s = "aab" p = "c*a*b"
        if (s[0] != target) {
          p = p.slice(2);
          continue;
        }

        while (s[0] == target) {
          s = s.slice(1);
        }

        if ((!s && p.slice(2)) || (s && !p.slice(2))) {
          return false;
        }

        p = p.slice(2);
      } else {
        if (s[0] === p[0]) {
          s = s.slice(2);
          p = p.slice(2);

          if (!p || !s) {
            return false;
          }
        } else {
          s = s.slice(1);

          if ((!s && p.slice(1)) || (s && !p.slice(1))) {
            return false;
          }

          p = p.slice(1);
        }
      }
    } else {
      if (s[0] === p[0]) {
        s = s.slice(1);
        p = p.slice(1);
      }
    }
  }
  return bool;
};

console.log(isMatch("abcd", "d*"));
