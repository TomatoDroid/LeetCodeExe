/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划 时间O(N),空间O(1)
 * 状态转移方程：f(i) = max{f(i-1)+a(i), a(i)}
 */
// var maxSubArray = function (nums) {
//   let pre = 0;
//   let maxAns = nums[0];
//   nums.forEach((item) => {
//     pre = Math.max(pre + item, item);
//     maxAns = Math.max(maxAns, pre);
//   });
//   return maxAns;
// };

/**
 * @param {number[]} nums
 * @return {number}
 * 分治 时间O(N),空间O(logN)
 */
// lSum 表示 [l, r] 内以 l 为左端点的最大子段和
// rSum 表示 [l, r] 内以 r 为右端点的最大子段和
// mSum 表示 [l, r] 内的最大子段和
// iSum 表示 [l, r] 的区间和
function Status(l, r, m, i) {
  this.lSum = l;
  this.rSum = r;
  this.mSum = m;
  this.iSum = i;
}

const pushUp = (l, r) => {
  const iSum = l.iSum + r.iSum;
  const lSum = Math.max(l.lSum, l.iSum + r.lSum);
  const rSum = Math.max(r.rSum, r.iSum + l.rSum);
  const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
  return new Status(lSum, rSum, mSum, iSum);
};

const getInfo = (a, l, r) => {
  if (l === r) {
    return new Status(a[l], a[l], a[l], a[l]);
  }
  const m = (l + r) >> 1;
  const lSub = getInfo(a, l, m);
  const rSub = getInfo(a, m + 1, r);
  return pushUp(lSub, rSub);
};

var maxSubArray = function (nums) {
  return getInfo(nums, 0, nums.length - 1).mSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
