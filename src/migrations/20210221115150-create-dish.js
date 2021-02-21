"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Dishes",
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
        image: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        countPerson: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        timeEat: {
          type: Sequelize.ENUM("MORNING", "LUNCH", "DINNER", "ALL_DAY"),
        },
        kitchenId: {
          type: Sequelize.INTEGER,
          references: { model: "Kitchens" },
        },
      },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci",
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Dishes");
  },
};
