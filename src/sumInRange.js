/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let sum = 0;

  if (end < start) {
    const temp = end;
    // eslint-disable-next-line no-param-reassign
    end = start;
    // eslint-disable-next-line no-param-reassign
    start = temp;
  }

  for (let i = end; i >= start; i--) {
    // i-- чтобы считало с конца
    sum += i;
  }

  return sum;
};
