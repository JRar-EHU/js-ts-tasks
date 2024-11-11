/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  const proxyArray = [];

  for (const num of arr) {
    // of чекает значения в каждом элементе
    proxyArray.push(num);
    if (num % 2 !== 0) {
      proxyArray.push(100);
    }
  }
  return proxyArray;

  /*
      // через обычный цикл
  for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr.splice(i + 1, 0, 100); // Вставка 100 после элемента .splice ( начало, сколько удалить, что вставить после)
            i++; // пропускаем вставленный элемент
        }
    }
    return arr;
   */
};
