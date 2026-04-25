'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Messages', [
      {
        content: 'Witaj w aplikacji wiadomości! To jest pierwsza przykładowa wiadomość.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'To jest druga wiadomość testowa. Możesz ją edytować lub usunąć.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Trzecia wiadomość demonstracyjna. System wiadomości działa poprawnie!',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Messages', null, {});
  }
};

