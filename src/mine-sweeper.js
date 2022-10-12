const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(m) {
  const result = [];

  m.forEach((element, index) => {
    result[index] = [];
    element.forEach((el, i) => {
      result[index][i] = 0;
    });
    console.log(result);
  });

  m.forEach((element, index) => {
    element.forEach((el, i) => {
      if (index === 0) {
        if (el === true) {
          if (i === 0) {
            result[index][i + 1] += 1;
            result[index + 1][i] += 1;
            result[index + 1][i + 1] += 1;
          } else if (i === element.length - 1) {
            result[index][i - 1] += 1;
            result[index + 1][i] += 1;
            result[index + 1][i - 1] += 1;
          } else {
            result[index][i - 1] += 1;
            result[index][i + 1] += 1;
            result[index + 1][i] += 1;
            result[index + 1][i - 1] += 1;
            result[index + 1][i + 1] += 1;
          }
        }
      } else if (index === element.length - 1) {
        if (el === true) {
          if (i === 0) {
            result[index][i + 1] += 1;
            result[index - 1][i] += 1;
            result[index - 1][i + 1] += 1;
          } else if (i === element.length - 1) {
            result[index][i - 1] += 1;
            result[index - 1][i] += 1;
            result[index - 1][i - 1] += 1;
          } else {
            result[index][i - 1] += 1;
            result[index][i + 1] += 1;
            result[index - 1][i] += 1;
            result[index - 1][i - 1] += 1;
            result[index - 1][i + 1] += 1;
          }
        }
      } else {
        if (el === true) {
          result[index][i - 1] += 1;
          result[index][i + 1] += 1;
          result[index - 1][i] += 1;
          result[index - 1][i - 1] += 1;
          result[index - 1][i + 1] += 1;
          result[index + 1][i] += 1;
          result[index + 1][i - 1] += 1;
          result[index + 1][i + 1] += 1;
        }
      }
    });
  });
  console.log(result);
  return result;
}

console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
);

module.exports = {
  minesweeper,
};
