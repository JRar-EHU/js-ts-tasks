/**
 * Write a function that returns a function that will sort all it's arguments in an order
 * being specified by sortComparator function from TestUtils object
 *
 * Note: You MUST use a function sortComparator from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ sortComparator: function() }} TestUtils
 * @returns {function}
 */
module.exports.sort = function sort(TestUtils) {
  return function (...dataToSort) {
    // ... тк неизвестно кол-во данных для сортировки

    return dataToSort.sort(TestUtils.sortComparator); // TestUtils.sortComparator в данном случае "настройка" сортировки для .sort.
  };
};
