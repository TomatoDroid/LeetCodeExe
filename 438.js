/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = [];
  let left = 0;
  let right = 0;
  const wMap = {};
  const pMap = {};
  let match = 0;

  for (const key in p) {
    pMap[p[key]] ? pMap[p[key]]++ : (pMap[p[key]] = 1);
  }
  const pLength = Object.keys(pMap).length;

  while (right < s.length) {
    let rc = s[right];
    if (pMap[rc]) {
      wMap[rc] ? wMap[rc]++ : (wMap[rc] = 1);
      if (pMap[rc] === wMap[rc]) {
        match++;
      }
    }
    right++;
    while (pLength === match) {
      if (right - left === p.length) {
        res.push(left);
      }
      let lc = s[left];
      if (pMap[lc]) {
        wMap[lc]--;
        if (wMap[lc] < pMap[lc]) {
          match--;
        }
      }
      left++;
    }
  }
  return res;
};

console.log(findAnagrams("cbaebabacd", "abc"));
