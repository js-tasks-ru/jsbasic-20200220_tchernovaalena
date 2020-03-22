/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
'use strict'
function makeDiagonalRed(table) { 
  let i = 0;
  for (let cell of table.rows) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
    i++;
  }
}