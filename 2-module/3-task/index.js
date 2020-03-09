'use strict';

let calculator = {
  
  read(a, b) {
    calculator.a = a;
    calculator.b = b;
  },
  
  sum() {
    let sum = calculator.a + calculator.b;
    return sum;
  },

  mul() {
    let mul = calculator.a * calculator.b;
    return mul;
  }  
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
