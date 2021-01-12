/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 2) {
        return true
    }
    let left = 2
    let right = Math.floor(num / 2)

    while (left <= right) {
        let m = Math.floor((left + right) / 2)
        if (m === num / m) {
            return true
        } else if (m > num / m) {
            right = m - 1
        } else {
            left = m + 1
        }
    }
    return false
};
console.log(isPerfectSquare(1));