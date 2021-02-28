"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "BookmarkedUsers",
      {
        Id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          onDelete: "CASCADE",
          references: { model: "Users" },
        },
        UserId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          onDelete: "CASCADE",
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
