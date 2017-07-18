"use strict"

const generate = require('../helpers/generateKey');
const hash = require('../helpers/crypto');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    secret: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: user => {
        let secret = generate();
        user.password = hash(user.password, secret);
        user.secret = secret;
      }
    }
  });
  return User;
};
