/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  // Сито Эратосфена
  return function (start, end) {
    // -----------------
    const sito = []; // для хранения типа чисел (простые\составные)
    sito[0] = false;
    sito[1] = false;
    for (let i = 2; i <= end; i++) {
      // все числа кроме 0,1 "по умолчанию" простые
      sito[i] = true;
    }
    // -----------------
    for (let i = 2; i * i <= end; i++) {
      // множители i уже составные
      if (sito[i]) {
        // пропуск уже отработанных
        for (let j = i * i; j <= end; j += i) {
          // начало i*i, тк предыдущие уже отработаны
          sito[j] = false; // каждое j кратное i составное
        }
      }
    }
    // -----------------
    const primes = [];
    for (let i = start; i <= end; i++) {
      if (sito[i]) {
        primes.push(i);
      }
    }

    return primes;
  };
};
