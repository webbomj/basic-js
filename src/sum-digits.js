const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numberArr = String(n)
    .split("")
    .map((el) => Number(el));
  let result = 0;
  if (numberArr.length > 1) {
    result = numberArr.reduce((acc, el) => {
      return acc + el;
    }, 0);
  }

  return String(result).split("").length > 1 ? getSumOfDigits(result) : result;
}

console.log(getSumOfDigits(91));

module.exports = {
  getSumOfDigits,
};
