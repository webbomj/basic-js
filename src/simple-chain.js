const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },
  addLink(n) {
    if (n) {
      this.result.push(`( ${n} )`);
    } else {
      this.result.push("( )");
    }
    return this;
  },
  removeLink(p) {
    this.result = [...this.result.slice(0, p - 1), ...this.result.slice(p)];
    console.log("s", this.result.slice(0, p), this.result.slice(p + 1));
    return this;
  },
  reverseChain() {
    this.result = this.result.reverse();
    return this;
  },
  finishChain() {
    return this.result.join("~~");
  },
};

console.log(
  chainMaker
    .addLink(function () {})
    .addLink("2nd")
    .addLink("3rd")
    .removeLink(2)
    .reverseChain()
    .finishChain()
);

module.exports = {
  chainMaker,
};
