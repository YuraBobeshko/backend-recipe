"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Steps",
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
        describe: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING,
        },
        time: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        nextStepId: { type: Sequelize.INTEGER, references: { model: "Steps" } },
      },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci",
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Steps");
  },
};
