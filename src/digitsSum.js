/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  let sum = 0;
  let convert = Math.abs(n);

  while (convert > 0) {
    sum += convert % 10; // + цифра разряда к сумме
    convert = Math.floor(convert / 10); // -поледний разряд
  }

  return sum;
};
