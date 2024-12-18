/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  const results = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    promisesArray.forEach((promiseInArray, index) => {
      promiseInArray
        .then(result => {
          results[index] = result;
          count += 1;
          if (count === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(error => reject(error));
    });
  });
};
