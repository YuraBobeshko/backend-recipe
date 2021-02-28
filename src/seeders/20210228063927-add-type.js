"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Types",
      [
        {
          id: 1,
          name: "",
          icon: "",
        },
        {
          id: 2,
          name: "",
          icon: "",
        },
        {
          id: 3,
          name: "",
          icon: "",
        },
        {
          id: 4,
          name: "",
          icon: "",
        },
        {
          id: 5,
          name: "",
          icon: "",
        },
        {
          id: 6,
          name: "",
          icon: "",
        },
        {
          id: 7,
          name: "",
          icon: "",
        },
        {
          id: 8,
          name: "",
          icon: "",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Types", null, {});
  },
};
