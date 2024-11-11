/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  return arr.map(el => {
    // .map - применение выражения к каждому элементу массива

    const abs = Math.abs(el); // убираем знак
    const digits = abs.toString().length; // переводим в строку чтобы понять кол-во цифр

    if (digits === 1) {
      return 1;
    } else if (digits === 2) {
      return 2;
    } else if (digits === 3) {
      return 3;
    } else {
      return 4;
    }
  });

  /*
        // То же самое, только через цикл
      for (let i = 0; i < arr.length; i++) {
        const abs = Math.abs(arr[i]);
        const digits = abs.toString().length;

        if (digits === 1) {
          arr[i] = 1;
        } else if (digits === 2) {
          arr[i] = 2;
        } else if (digits === 3) {
          arr[i] = 3
        } else {
          arr[i] = 4;
        }
       }
        return arr;
  */
};
