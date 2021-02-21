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
        firstName: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        lastName: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(80),
          unique: true,
          allowNull: false,
        },
        passwordHash: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        avatar: Sequelize.STRING,
        phone: Sequelize.STRING(14),
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
