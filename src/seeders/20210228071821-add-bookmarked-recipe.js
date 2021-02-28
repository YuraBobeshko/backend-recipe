"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "BookmarkedRecipes",
      [
        {
          userId: 1,
          recipeId: 1,
        },
        {
          userId: 2,
          recipeId: 2,
        },
        {
          userId: 3,
          recipeId: 1,
        },
        {
          userId: 4,
          recipeId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("BookmarkedRecipes", null, {});
  },
};
