// 最长回文子串
/**
  给你一个字符串 s，找到 s 中最长的回文子串。

  输入：s = "babad"
  输出："bab"
  解释："aba" 同样是符合题意的答案。
  
  输入：s = "cbbd"
  输出："bb"

  输入：s = "a"
  输出："a"
*/

const longestPalindrome = function(s) {
  let sLen = s.length;
  if (sLen < 2) {
    return s;
  }

  let maxLen = 1;
  let start = 0;
  const boolMatrix = new Array(sLen).fill().map((s, i) => {
    const arr = new Array(sLen).fill(false);
    arr[i] = true;
    return arr;
  });

  for (let j = 1; j < sLen; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] == s[j]) {
        if (j - i < 3) {
          boolMatrix[i][j] = true;
        } else {
          boolMatrix[i][j] = boolMatrix[i + 1][j - 1];
        }

        if (boolMatrix[i][j] && j - i + 1 > maxLen) {
          maxLen = j - i + 1;
          start = i;
        }
      } else {
        continue;
      }
    }
  }

  return s.substring(start, start + maxLen);
}

console.log(
  longestPalindrome("aacabdkacaa")
)