/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * 时间O(nlogn)
 * 排序和哨兵可以代替双循环
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let res = 0;
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    if (index < g.length && g[index] <= s[i]) {
      res++;
      index++;
    }
  }
  return res;
};

console.log(findContentChildren([3, 2, 1], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));
