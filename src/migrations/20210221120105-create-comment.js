"use strict";

const TIMESTAMP = require("../dataTypes/timestamp");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Comments",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          type: Sequelize.STRING(120),
          allowNull: false,
        },
        discribe: {
          type: Sequelize.TEXT,
        },
        rating: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        target: {
          type: Sequelize.ENUM("DISH", "RECIPE", "USER"),
          allowNull: false,
        },
        modelId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onDelete: "CASCADE",
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onDelete: "CASCADE",
          references: { model: "Users" },
        },
        createdAt: {
          type: TIMESTAMP,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          type: TIMESTAMP,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci",
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Comments");
  },
};
