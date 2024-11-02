/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  let lowest;
  let highest;

  if (firstSalary < secondSalary && firstSalary < thirdSalary) {
    lowest = firstSalary;
  } else if (secondSalary < thirdSalary && secondSalary < firstSalary) {
    lowest = secondSalary;
  } else {
    lowest = thirdSalary;
  }

  if (firstSalary > secondSalary && firstSalary > thirdSalary) {
    highest = firstSalary;
  } else if (secondSalary > thirdSalary && secondSalary > firstSalary) {
    highest = secondSalary;
  } else {
    highest = thirdSalary;
  }

  return highest - lowest;
};
