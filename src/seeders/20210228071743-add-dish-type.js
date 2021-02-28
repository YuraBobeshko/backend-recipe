"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "DishTypes",
      [
        {
          dishId: 1,
          typeId: 2,
        },
        {
          dishId: 1,
          typeId: 3,
        },
        {
          dishId: 1,
          typeId: 4,
        },
        {
          dishId: 1,
          typeId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("DishTypes", null, {});
  },
};
