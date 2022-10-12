const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const values = [];
  const index = [];
  const arr0 = arr.map((el, i) => {
    if (el !== -1) {
      values.push(el);
      index.push(i);
      return 0;
    } else {
      return -1;
    }
  });
  values.sort((a, b) => a - b);

  console.log(arr0, values, index);

  index.forEach((el, i) => {
    arr0[el] = values[i];
  });
  return arr0;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

module.exports = {
  sortByHeight,
};
