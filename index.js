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

const simpleGit = require("simple-git");
const co = require("co");

const git = simpleGit();

co(async function () {
  const { current: branch } = await git.branch();
  const originBranchName = "origin/master";
  const diffBranchs = `${branch}...${originBranchName}`;
  const diffSummary = await git.diff([diffBranchs]);

  console.log(diffSummary);
  // console.log(branchLocal);
});
