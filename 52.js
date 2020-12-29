/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    if (n < 1) {
        return 0
    }
    const result = []
    const cols = new Set()
    const pie = new Set()
    const na = new Set()
    _DFS(n, 0, result, [], cols, pie, na)
    return result.length
}

function _DFS(n, row, result, currentState, cols, pie, na) {
    if (row >= n) {
        result.push(currentState)
        return
    }
    for (let col = 0; col < n; col++) {
        if (cols.has(col) || pie.has(col + row) || na.has(col - row)) {
            continue
        }
        cols.add(col)
        pie.add(col + row)
        na.add(col - row)
        _DFS(n, row + 1, result, currentState + [col], cols, pie, na)

        cols.delete(col)
        pie.delete(col + row)
        na.delete(col - row)
    }
}

console.log(totalNQueens(4));
