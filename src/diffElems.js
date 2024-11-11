/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  const uniqElem = []; // Массив для уникальных элементов

  for (let i = 0; i < arr.length; i++) {
    if (!uniqElem.includes(arr[i])) {
      // Проверка на уникальность
      uniqElem.push(arr[i]); // Наращиваем уникальный
    }
  }
  return uniqElem.length;
};
