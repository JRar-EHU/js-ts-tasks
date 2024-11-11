/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  return arr.filter(element => JSON.stringify(element) !== JSON.stringify(value));
  // JSON - текстовый формат обмена(?) данными, {} для пар ключ:значение, [] для коллекций
  // .stringify делает элемент строкой json, дальше сравниваем 2 строки.

  /* не работает с объектами и многомерными массивами

 for (let i = 0; i < arr.length; i++) {
    if(arr[i] === value) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr
*/
};
