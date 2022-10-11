const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(m) {
  let counter = 0;

  const countCatsArr = (arr) => {
    arr.forEach((el, i) => {
      if (el === "^^") {
        counter += 1;
      }
    });
  };

  m.forEach((el, i) => {
    if (Array.isArray(el)) {
      countCatsArr(el);
    }
  });

  return counter;
}

module.exports = {
  countCats,
};
