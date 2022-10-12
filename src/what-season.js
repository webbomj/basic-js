const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (typeof date === "undefined") {
    throw new Error("Unable to determine the time of year!");
  }

  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }

  // if (date.getMonth === undefined || !date.hasOwnProperty("getMonth")) {
  //   throw new Error("Invalid date!");
  // }

  console.log(date.constructor.name);

  const winterMonth = [0, 11, 1];
  const springMonth = [2, 3, 4];
  const summerMonth = [5, 6, 7];
  const autumnMonth = [8, 9, 10];

  if (winterMonth.includes(date.getMonth())) {
    return "winter";
  }

  if (springMonth.includes(date.getMonth())) {
    return "spring";
  }

  if (summerMonth.includes(date.getMonth())) {
    return "summer";
  }

  if (autumnMonth.includes(date.getMonth())) {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
