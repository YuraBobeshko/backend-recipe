"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          id: 1,
          title: "",
          discribe: "",
          rating: 1,
          target: "USER",
          modelId: 2,
          userId: 1,
        },
        {
          id: 2,
          title: "",
          discribe: "",
          rating: 1,
          target: "USER",
          modelId: 3,
          userId: 1,
        },
        {
          id: 3,
          title: "",
          discribe: "",
          rating: 1,
          target: "DISH",
          modelId: 1,
          userId: 2,
        },
        {
          id: 4,
          title: "",
          discribe: "",
          rating: 1,
          target: "DISH",
          modelId: 2,
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
