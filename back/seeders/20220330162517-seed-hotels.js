'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'orange',
        price: 10,
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
      {
        name: 'apple',
        price: 3,
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
      {
        name: 'nut',
        price: 1,
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
      {
        name: 'grapes',
        price: 5,
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
      {
        name: 'watermelon',
        price: 8,
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
      {
        name: 'potato',
        price: 4,
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Hotels', null, {});
  }
};