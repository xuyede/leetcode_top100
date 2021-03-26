// 无重复字符的最长子串
/**
  给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度

  输入: s = "abcabcbb"
  输出: 3 
  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3
  
  输入: s = "bbbbb"
  输出: 1

  输入: s = "pwwkew"
  输出: 3
*/

const lengthOfLongestSubstring = function(s) {
  if (!s) return 0
  if (s == ' ') return 1;
  
  let ret = 1;
  let startPoint = 0;
  let set = new Set();

  for (; startPoint < s.length; startPoint++) {
    let i = startPoint;
    while (i < s.length) {
      let t = s[i];
      if (!set.has(t)) {
        set.add(t);
        i++;
      } else {
        ret = Math.max(ret, set.size);
        set.clear();
        break;
      }
    }
  }

  return ret;
}

console.log(
  lengthOfLongestSubstring('c')
)