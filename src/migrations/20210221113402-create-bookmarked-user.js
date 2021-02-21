"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "BookmarkedUsers",
      {
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: { model: "Users" },
        },
        bookmarkedUserId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: { model: "Users" },
        },
      },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci",
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("BookmarkedUsers");
  },
};
