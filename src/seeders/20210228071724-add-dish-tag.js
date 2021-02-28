"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "DishTags",
      [
        {
          dishId: 1,
          tagId: 2,
        },
        {
          dishId: 1,
          tagId: 3,
        },
        {
          dishId: 1,
          tagId: 4,
        },
        {
          dishId: 1,
          tagId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("DishTags", null, {});
  },
};
