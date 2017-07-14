'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Students', [{
      first_name: 'Patrick',
      last_name: 'Benzema',
      email: 'patlupernahdibullyga@gmail.com',
      jurusan: 'Teknik Ganti Wallpaper Macmini',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kokoh',
      last_name: 'Tanamal',
      email: 'kokoht@gmail.com',
      jurusan: 'Hacktiv8',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Students', null, {});
  }
};
