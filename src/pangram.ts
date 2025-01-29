/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const isString = typeof word === 'string';
  const checkSet = isString ? alphabet : digits;

  const str = word.toString().toLowerCase();

  for (const char of checkSet) {
    if (str.indexOf(char) === -1) return false;
  }

  return true;

  // const str= typeof word === "string" ? word.toLowerCase().replace(/[^a-z]/g, "") : word;
  // const alphabet = "abcdefjhijklmnopqrstuvwxyz";
  // const digits = "0123456789";
  //
  // if (typeof str ==="string") {
  //   for (const char of alphabet) {
  //     if (str.indexOf(letter) === -1) return false
  //   }
  //   return true;
  // }
  // const foo = word.toString();
  // for (const digit of digits) {
  //   if (foo.indexOf(digit) === -1) return false;
  // }
  // return true;
};
