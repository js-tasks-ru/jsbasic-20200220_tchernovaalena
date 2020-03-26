/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
'use strict';

function highlight(table) {

  let statusColumnIndex;
  
  //get status column index
  for (let tr of table.rows) {
    for (let td of tr.cells) {
      if (td.textContent === 'Status') {
        statusColumnIndex = td.cellIndex;
      }
    }
  }  
  //check statuses and apply applicable classes and attributes 
  for (let tr of table.rows) {   
    for (let td of tr.cells) {
      if (td.dataset.available === "true") {
        tr.classList.add('available');
      }
      else if (td.dataset.available === "false") {
        tr.classList.add('unavailable');
      }
      else if (!tr.cells[statusColumnIndex].hasAttribute('data-available')) {
        tr.setAttribute('hidden', "");
      }
    }
  }
  //check genders and apply applicable classes
  for (let tr of table.rows) {   
    for (let td of tr.cells) {
      if (td.textContent === "m") {
        tr.classList.add('male');
      }
      else if (td.textContent === "f") {
        tr.classList.add('female');
      }
    }
  }
  //check age and add applicable astyle
  for (let tr of table.rows) {   
    for (let td of tr.cells) { 
      let age = parseInt(td.textContent);
      if (!isNaN(age) && age < 18) {
        tr.setAttribute('style', 'text-decoration:line-through'); 
      }
    }
  }
}
  






