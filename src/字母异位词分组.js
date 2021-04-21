// https://leetcode-cn.com/problemset/leetcode-hot-100/

// 字母异位词分组
/**
  给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

  输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
  输出:
  [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
  ]
*/

const groupAnagrams = function(strs) {
  const map = new Map();

  strs.forEach(str => {
    let sortStr = str.split('').sort().join('');
    if (map.has(sortStr)) {
      map.get(sortStr).push(str);
    } else {
      map.set(sortStr, [str]);
    }
  })

  return Array.from(map.values());
}

console.log(
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
)