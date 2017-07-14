'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Teachers', [{
      first_name: 'Ahmad',
      last_name: 'Fajar',
      email: 'ahmadfajar@sekolahjs.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Vega',
      last_name: 'Tron',
      email: 'vegatron@sekolahjs.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};
