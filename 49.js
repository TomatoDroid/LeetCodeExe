/**
 * @param {string[]} strs
 * @return {string[][]}
 * 时间复杂度O(NKlogK)，外部循环复杂度为O(N),然后在O(KlogK)的时间内对每个字符串排序
 */
// var groupAnagrams = function (strs) {
//   const map = {};
//   for (let i = 0; i < strs.length; i++) {
//     const key = Array.from(strs[i]).sort().join();
//     map[key] ? map[key].push(strs[i]) : (map[key] = [strs[i]]);
//   }
//   return Object.values(map);
// };
/**
 *
 * @param {*} strs
 * 时间复杂度 O(NK)
 */
var groupAnagrams = function (strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const p = new Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      p[strs[i][j].charCodeAt() - 97]++;
    }

    let key = p.toString();
    map[key] ? map[key].push(strs[i]) : (map[key] = [strs[i]]);
  }
  return Object.values(map);
};

console.log(
  JSON.stringify(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
);
