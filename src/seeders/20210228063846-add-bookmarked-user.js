"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "BookmarkedUsers",
      [
        {
          Id: 1,
          userId: 2,
        },
        {
          Id: 1,
          userId: 3,
        },
        {
          Id: 1,
          userId: 4,
        },
        {
          Id: 1,
          userId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("BookmarkedUsers", null, {});
  },
};
