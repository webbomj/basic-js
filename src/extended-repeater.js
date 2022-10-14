const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function getInnerStr(option) {
  if (typeof option.addition !== "string" && option.addition !== undefined) {
    option.addition = String(option.addition);
  }

  if (!option.addition) {
    return "";
  }

  let separator = "|";
  let repeatTimes = 1;

  if (option.additionSeparator) {
    separator = option.additionSeparator;
  }

  if (option.additionRepeatTimes) {
    repeatTimes = option.additionRepeatTimes;
  }

  let additionArr = [];

  for (let i = 0; i < repeatTimes; i++) {
    additionArr.push(option.addition);
  }

  let result = additionArr.join(separator);

  return result;
}

function repeater(str, option) {
  const {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = option;

  const innerString = getInnerStr(option);

  let separatorDefault = "+";
  let repeat = 1;

  if (separator) {
    separatorDefault = separator;
  }

  if (repeatTimes) {
    repeat = repeatTimes;
  }

  let strArr = [];

  for (let i = 0; i < repeat; i++) {
    strArr.push(String(str) + innerString);
  }

  const result = strArr.join(separatorDefault);
  return result;
}

console.log(repeater("la", { repeatTimes: 3 }));

module.exports = {
  repeater,
};
