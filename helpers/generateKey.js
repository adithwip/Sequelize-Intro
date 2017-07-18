"use strict"

module.exports = () => {
  let generated = [];

  for (let i = 0; i < 8; i++) {
    var turn = Math.ceil(Math.random() * 3)
    var random = Math.ceil(Math.random() * 26);

    if (turn === 1) {
      generated.push(String.fromCharCode(64 + random))
    } else if (turn === 2) {
      generated.push(String.fromCharCode(96 + random))
    } else {
      generated.push(Math.ceil(Math.random() * 9));
    }
  }

  return generated.join('');
}

console.log(module.exports());
