"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "RecipeTags",
      [
        {
          recipeId: 1,
          tagId: 2,
        },
        {
          recipeId: 1,
          tagId: 3,
        },
        {
          recipeId: 1,
          tagId: 4,
        },
        {
          recipeId: 1,
          tagId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("RecipeTags", null, {});
  },
};
