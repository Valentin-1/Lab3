'use strict';

const countries = require('../../data/seeders/products-seeder.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('products', products, {}); 
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('products', null, {});
  }
};