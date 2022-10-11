const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(m) {
  if (!Array.isArray(m)) {
    return false;
  }
  const arrM = m.filter((element) => {
    return typeof element === "string";
  });
  if (arrM.length === 0) {
    return false;
  }

  const arrMTrim = arrM.map((el) => el.trim()[0].toUpperCase());

  let result = "";
  arrMTrim.sort().forEach((element) => {
    result += element.trim()[0];
  });

  return result;
}

module.exports = {
  createDreamTeam,
};
