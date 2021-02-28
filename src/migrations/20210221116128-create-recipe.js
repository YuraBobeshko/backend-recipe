"use strict";
const TIMESTAMP = require("../dataTypes/timestamp");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Recipes",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        time: {
          type: Sequelize.FLOAT,
        },
        image: {
          type: Sequelize.STRING,
        },
        dishId: {
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: { model: "Dishes" },
        },
        userId: {
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: { model: "Users" },
        },
        stepId: {
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: { model: "Steps" },
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
    await queryInterface.dropTable("Recipes");
  },
};
