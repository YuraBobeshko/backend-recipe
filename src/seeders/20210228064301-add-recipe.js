"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Recipes",
      [
        {
          id: 1,
          name: "",
          time: 1.5,
          image: "",
          dishId: 1,
          userId: 1,
          stepId: 1,
        },
        {
          id: 2,
          name: "",
          time: 2.5,
          image: "",
          dishId: 2,
          userId: 1,
          stepId: 4,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Recipes", null, {});
  },
};
