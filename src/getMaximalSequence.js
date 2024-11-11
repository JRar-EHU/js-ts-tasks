/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let streak = [arr[0]]; // буферный стрик
  let maxStreak = [arr[0]]; // Максимальный стрик

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      // Проверка на равенство текущего и предыдущего элементов.

      streak.push(arr[i]); // наращиваем буферный
    } else {
      if (streak.length > maxStreak.length) {
        // сравниваем буферный  с максимальным.

        maxStreak = streak; // Если больше , обновляем максимальный
      }

      streak = [arr[i]]; // создаем новый буферный
    }
  }

  if (streak.length > maxStreak.length) {
    // финальное сравнение последнего буферного с максимальным

    maxStreak = streak;
  }

  return maxStreak;
};
