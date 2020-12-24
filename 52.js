/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  if (n < 1) {
    return [];
  }

  const result = [];
  const cols = new Set();
  const pie = new Set();
  const na = new Set();
  _DFS(n, 0, [], result, cols, pie, na);
  return generate(n, result)
};

function _DFS(n, row, currentState, result, cols, pie, na) {
  if (row >= n) {
    result.push(currentState);
    return;
  }
  for (let col = 0; col < n; col++) {
    if (cols.has(col) || pie.has(row + col) || na.has(row - col)) {
        continue
    }
    cols.add(col)
    pie.add(row + col)
    na.add(row - col)

    _DFS(n, row + 1, currentState+[col], result, cols, pie, na)

    cols.delete(col)
    pie.delete(row + col)
    na.delete(row - col)
  }
}

function generate(n, result) {
    const res = []
    for (let board of result) {
        const item = []
        for (let rowTemp of board) {
            let row = ''
            for (let col = 0; col < n; col++) {
                if (+rowTemp === col ) {
                    row += 'Q'
                } else {
                    row += '.'
                }
            }
            item.push(row)
        }
        res.push(item)
    }
    return res
}

console.log(JSON.stringify(solveNQueens(4)));
