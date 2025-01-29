/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  function parseDate(date: string): Date {
    const [day, month, year] = date.split('.').map(Number);
    if (typeof day === undefined || month === undefined || year === undefined) {
      throw new Error(`${date} is not a valid date`);
    }
    return new Date(year, month - 1, day);
  }

  function isLeapYear(year: number): boolean {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  const date = typeof targetDate === 'string' ? parseDate(targetDate) : targetDate;

  let dateYear = date.getFullYear();

  while (!isLeapYear(dateYear)) {
    dateYear += 1;
  }

  const nextLeapYear = new Date(dateYear, 0, 1);

  const diffInMs = nextLeapYear.getTime() - date.getTime();

  return Math.floor(diffInMs / (1000 * 3600 * 24));
};
