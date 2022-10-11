const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(d) {
  const result = {};
  if (d.length === 0) {
    return result;
  }
  const arr = [];
  d.forEach((el) => {
    arr.push(...el.split("."));
  });
  const zoneLength = arr.filter((el) => el === arr[arr.length - 1]).length;
  result[`.${arr[arr.length - 1]}`] = zoneLength;
  const arrWithoutZone = arr.filter((el) => el !== arr[arr.length - 1]);
  const domain = arrWithoutZone.filter(
    (el) => el === arr[arr.length - 2]
  ).length;
  result[`.${arr[arr.length - 1]}.${arr[arr.length - 2]}`] = domain;
  const subdomain = arrWithoutZone.filter((el) => el !== arr[arr.length - 2]);

  subdomain.forEach((el, i, arrSub) => {
    const lengths = arrSub.filter((elem) => elem === el).length;
    result[`.${arr[arr.length - 1]}.${arr[arr.length - 2]}.${el}`] = lengths;
  });
  return result;
}

module.exports = {
  getDNSStats,
};
