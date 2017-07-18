"use strict"

const crypto = require('crypto');

module.exports = (password, secret) => {
  var chiper = crypto.createCipher('aes192', secret);
  var crypted = chiper.update(password, 'utf-8', 'hex');

  crypted += chiper.final('hex');
  return crypted;
}

// console.log(module.exports('adith33', 'enak2'));
