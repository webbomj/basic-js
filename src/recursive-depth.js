const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    return arr.reduce((acc, el) => {
      if (Array.isArray(el)) {
        const counter = 1 + this.calculateDepth(el);
        if (counter > acc) {
          acc = counter;
          return acc;
        } else {
          return acc;
        }
      } else {
        return acc;
      }
    }, 1);
  }
}

module.exports = {
  DepthCalculator,
};
