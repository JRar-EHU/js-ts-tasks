/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
type Units = 'm' | 'mi' | 'gr' | 'pound' | 'C' | 'K';

module.exports.converter = function (
  value: number | string,
  from: 'm' | 'mi' | 'gr' | 'pound' | 'C' | 'K',
  to: 'm' | 'mi' | 'gr' | 'pound' | 'C' | 'K'
): number | boolean {
  // | string

  const formatedValue: number = typeof value === 'string' ? parseFloat(value) : value;
  const conversionTable: {
    [fromKey in Units]?: {
      [toKey in Units]?: (val: number) => number;
    };
  } = {
    m: {
      mi: val => val / 1609.344,
      m: val => val,
    },
    mi: {
      m: val => val * 1609.344,
      mi: val => val,
    },
    gr: {
      pound: val => val / 453.592,
      gr: val => val,
    },
    pound: {
      gr: val => val * 453.592,
      pound: val => val,
    },
    C: {
      K: val => val + 273.15,
      C: val => val,
    },
    K: {
      C: val => val - 273.15,
      K: val => val,
    },
  };

  if (!conversionTable[from] || !conversionTable[from][to]) {
    return false;
  }

  const convertedValue = conversionTable[from][to](formatedValue);

  return Math.round(convertedValue * 100) / 100;
  //   return convertedValue.toFixed(2);
};
