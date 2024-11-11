/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  return prop in object; // ...in ... чекает ключи\свойства в каждом элементе

  /*
  //  не чекает свойства прототипа >:С
     for(const check in object) {
      if (check === prop) return true;
    }
    return false;
  */
};
