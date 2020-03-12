/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let result = users.map(function(item) {
    let userName = item.name;
    return userName;
  });
  return result;
}
