/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arrSplitGaps = str.split(' ');
  let result = [];
  arrSplitGaps.forEach(function(item) {
    
    let arrSplitComas = item.split(',');
    arrSplitComas.forEach(function(i) {
      
      let newNumber = parseFloat(i);
      if (!isNaN(newNumber)) {
        result.push(newNumber);
      }  
    }); 
  });

  result.sort(function(a, b) { return a - b; });
    
  result = {
    min: result[0],
    max: result[result.length - 1],
  };
  
  return result;
}
