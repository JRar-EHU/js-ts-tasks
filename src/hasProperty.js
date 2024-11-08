/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  /*
     for(const check in object) {
      if (check === prop) return true;
    }
    return false;
  */

  return prop in object;
};
