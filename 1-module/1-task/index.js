/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    
  let factorial = n;
  
  if (n != 0) {
  	
  	for (i = 1; i < n; i++) {
  		factorial = factorial * i;
  		}
  	
  	return factorial;
	}
  
  else {
  	return 1;
  	}
  }
    
  


