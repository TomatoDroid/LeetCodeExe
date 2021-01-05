/**
 * @param {character[][]} board
 * @return {boolean}
 * hashmap
 */
// var isValidSudoku = function (board) {
//   const rows = [];
//   const cols = [];
//   const boxs = [];
//   for (let i = 0; i < 9; i++) {
//     rows[i] = {};
//     cols[i] = {};
//     boxs[i] = {};
//   }
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       const num = board[i][j];
//       if (num !== ".") {
//         const boxsNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);

//         rows[i][num] ? ++rows[i][num] : (rows[i][num] = 1);
//         cols[j][num] ? ++cols[j][num] : (cols[j][num] = 1);
//         boxs[boxsNum][num] ? ++boxs[boxsNum][num] : (boxs[boxsNum][num] = 1);

//         if (rows[i][num] > 1 || cols[j][num] > 1 || boxs[boxsNum][num] > 1) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// };

/**
 * 二维数组
 * @param {*} board 
 */
var isValidSudoku = function (board) {
  const rows = [];
  const cols = [];
  const boxs = [];
  for (let i = 0; i < 9; i++) {
    rows[i] = [];
    cols[i] = [];
    boxs[i] = [];
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num !== ".") {
        const boxsNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);

        rows[i][num] ? ++rows[i][num] : (rows[i][num] = 1);
        cols[j][num] ? ++cols[j][num] : (cols[j][num] = 1);
        boxs[boxsNum][num] ? ++boxs[boxsNum][num] : (boxs[boxsNum][num] = 1);

        if (rows[i][num] > 1 || cols[j][num] > 1 || boxs[boxsNum][num] > 1) {
          return false;
        }
      }
    }
  }
  return true;
};
const board3 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board3));
