"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "BookmarkedDishes",
      [
        {
          userId: 1,
          dishId: 2,
        },
        {
          userId: 1,
          dishId: 3,
        },
        {
          userId: 1,
          dishId: 4,
        },
        {
          userId: 1,
          dishId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("BookmarkedDishes", null, {});
  },
};
