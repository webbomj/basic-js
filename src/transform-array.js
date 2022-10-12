const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const controlWords = [
    "--double-next",
    "--double-prev",
    "--discard-prev",
    "--discard-next",
  ];

  const discardIndexPrev = [];
  const discardIndexNext = [];

  let result = arr.map((el, i) => {
    if (el === controlWords[0]) {
      return arr[i + 1];
    }

    if (el === controlWords[1]) {
      return arr[i - 1];
    }

    if (el === controlWords[2]) {
      discardIndexPrev.push(i);
      return "x";
    }

    if (el === controlWords[3]) {
      discardIndexNext.push(i);
      return "x";
    }

    return el;
  });

  console.log(discardIndexNext, discardIndexPrev, result);

  if (discardIndexNext.length > 0) {
    discardIndexNext.forEach((el, i) => {
      result = [...result.slice(0, el), ...result.slice(el + 2)];
    });
  }

  if (discardIndexPrev.length > 0) {
    discardIndexPrev.forEach((el, i) => {
      result = [...result.slice(0, el - 1), ...result.slice(el + 1)];
    });
  }

  return result;
}

console.log(
  transform([
    1,
    2,
    3,
    "--double-next",
    4,
    7,
    "--discard-prev",
    2,
    4,
    "--discard-next",
    3,
    7,
    "--discard-prev",
    2,
    4,
    "--discard-next",
    3,
    5,
  ])
);

// [1, 2, 3, 4, 4, 2, 4, 3, 3, 2, 4, 5]

module.exports = {
  transform,
};
