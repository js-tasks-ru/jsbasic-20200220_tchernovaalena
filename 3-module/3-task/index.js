/**
 * @param {string} str
 * @returns {string}
 */
'use strict';

function camelize(str) {
  let arrWithoutHyphens = str.split("-");
  let result = [];

  result.unshift(arrWithoutHyphens[0]);
      
  arrWithoutHyphens.forEach(function(item, index) {
    if (index !== 0) {
      let upperCasedWord = item[0].toUpperCase() + item.slice(1);
      result.push(upperCasedWord);
    }
  });
  result = result.join("");
  return result;
}
