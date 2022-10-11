const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) {
    return "";
  }
  let result = "";
  let resObj = {};
  const arr = str.split("");
  let count = 0;
  arr.forEach((el, i) => {
    if (arr[i] === arr[i + 1]) {
      count += 1;
      resObj[`${el}`] = count;
    } else {
      count += 1;
      resObj[`${el}`] = count;
      count = 0;
    }
  });

  for (let i in resObj) {
    result += `${resObj[i] === 1 ? "" : resObj[i]}${i}`;
  }

  return result;
}

console.log(encodeLine("abbcca"));

module.exports = {
  encodeLine,
};
