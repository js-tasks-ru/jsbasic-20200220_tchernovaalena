/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let namesSalaries = '';
  data.forEach(function(item, index, data) {
    if ((item.age <= age)) {
      if (namesSalaries === '') {
        let newNameSalary = `${item.name}, ${item.balance}`;
        namesSalaries = namesSalaries + newNameSalary;
      }  
      else {
        let newNameSalary = `\n${item.name}, ${item.balance}`;
        namesSalaries = namesSalaries + newNameSalary;
      }
    }
  });
  return namesSalaries;
}