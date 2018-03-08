'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

      return queryInterface.bulkInsert('Contacts', [
          {
              phoneNumber: "1697102183799",
              firstName: "Christen",
              lastName: "Fiona",
              email: "nascetur.ridiculus.mus@nec.org",
              photoString: ";319744248420910=0604772293? ",
              company: "Consectetuer Adipiscing Elit LLC",
              anotherPhoneNumber: "(702) 206-4213"
          },




      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
