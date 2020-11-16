/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sMap = {};
  const tMap = {};

  for (const index in s) {
    sMap[s[index]] ? sMap[s[index]]++ : (sMap[s[index]] = 1);
    tMap[t[index]] ? tMap[t[index]]++ : (tMap[t[index]] = 1);
  }

  for (const key in sMap) {
    if (sMap[key] !== tMap[key]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "cat"));
