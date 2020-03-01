
function print(text) {
  console.log(text);
}


function isValid(name) {
  if ((name) && 
      (!isAGapinAName(name)) &&
      (isNameLongEnough(name))) {
    return true;
  }
  else {
    return false;
  }
}

function isAGapinAName(name) {
  if (~name.indexOf(" ")) {
    return true; 
  }
  else {
    return false;
  }
}

function isNameLongEnough(name) {
  if (name.length >= 4) {
    return true;
  }
  else {
    return false;
  }
}


function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
