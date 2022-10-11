const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbers = [];

  const arrNumbers = String(n).split("");
  arrNumbers.forEach((el, i) => {
    let temp = el;
    arrNumbers[i] = "";
    let number = Number(arrNumbers.join("").trim());
    numbers.push(number);
    arrNumbers[i] = temp;
  });

  console.log(numbers);

  return Math.max(...numbers);
}

module.exports = {
  deleteDigit,
};
