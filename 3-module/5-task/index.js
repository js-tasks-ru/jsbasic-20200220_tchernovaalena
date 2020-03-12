/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */

 'use strict'

function filterRange(arr, a, b) {
    let filteredArr = arr.filter(item => item >= a && item <= b);
    return filteredArr;
}
