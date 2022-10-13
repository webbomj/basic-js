const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(arr) {
  const stack = []; //file
  let iteration = 0;

  arr.forEach((el, i) => {
    iteration = 0;
    if (!stack.includes(el)) {
      stack.push(el);
    } else {
      iteration += 1;
      let element = `${el}(${iteration})`;

      while (stack.includes(element)) {
        iteration += 1;
        element = `${el}(${iteration})`;
      }
      stack.push(element);
    }
  });

  return stack;
}

console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));

module.exports = {
  renameFiles,
};
