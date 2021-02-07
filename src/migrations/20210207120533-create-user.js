"use strict";

const TIMESTAMP = require("../dataTypes/timestamp");
module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable(
      "Users",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        firstName: {
          type: Sequelize.STRING,
        },
        lastName: {
          type: Sequelize.STRING,
        },
        avatar: {
          type: Sequelize.STRING,
        },
        passwordHash: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        authKey: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          type: TIMESTAMP,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        updatedAt: {
          type: TIMESTAMP,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
      },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci",
      }
    ),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable("Users"),
};
