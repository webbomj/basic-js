const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(m) {
  if (m.length === 1) {
    if (m[0].length === 1) {
      return m[0][0];
    } else {
      return m[0].reduce((acc, el) => {
        acc += el;
      }, 0);
    }
  }

  let count = 0;
  console.log(count);
  m.forEach((el, i) => {
    console.log(count);
    el.forEach((elem, indx) => {
      if (i === 0) {
        if (+elem !== 0) {
          count += elem;
        }
      } else {
        if (m[i - 1][indx] === 0) {
          count += 0;
        } else {
          count += elem;
        }
      }
      console.log(count);
    });
  });

  return count;
}

console.log(getMatrixElementsSum([[0]]));

module.exports = {
  getMatrixElementsSum,
};
