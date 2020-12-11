/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let di = 0;
  let obsMap = {};
  let endX = 0;
  let endY = 0;
  let res = 0;

  for (const obj of obstacles) {
    obsMap[`${obj[0]}-${obj[1]}`] = true;
  }

  for (const command of commands) {
    if (command === -2) {
      di = (di + 3) % 4;
    } else if (command === -1) {
      di = (di + 1) % 4;
    } else {
      for (let i = 0; i < command; i++) {
        let nextX = endX + dx[di];
        let nextY = endY + dy[di];
        if (obsMap[`${nextX}-${nextY}`]) {
          break;
        }
        endX = nextX;
        endY = nextY;
        res = Math.max(res, endX * endX + endY * endY);
      }
    }
  }
  return res;
};
