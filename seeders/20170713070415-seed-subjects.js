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
    return queryInterface.bulkInsert('Subjects', [{
      subject_name: 'NodeJS',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      subject_name: 'VueJS',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      subject_name: 'Bootsrap',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      subject_name: 'AngularJS',
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
    return queryInterface.bulkDelete('Subjects', null, {});
  }
};
