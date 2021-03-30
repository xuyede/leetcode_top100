
//  电话号码的字母组合
/**
  给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
  给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。


  输入：digits = "23"
  输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

  输入：digits = ""
  输出：[]

  输入：digits = "2"
  输出：["a","b","c"]
*/

const phoneEnum = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

const threeSum = function(digits) {
  if (!digits) return [];
  let ret = [];
  let loop = 0;

  for (let i = 0; i < digits.length; i ++) {
    const digitEnum = phoneEnum[digits[i]];
    loop = ret.length;


    if (i == 0) {
      ret = [...ret, ...digitEnum];
    } else {
      while(loop) {
        const currStr = ret.shift();
        digitEnum.forEach(d => {
          ret.push(`${currStr}${d}`);
        })

        loop--;
      }
    }
  }

  return ret;
}

console.log(
  threeSum('234')
)