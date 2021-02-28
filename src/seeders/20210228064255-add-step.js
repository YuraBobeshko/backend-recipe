"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Steps",
      [
        {
          id: 6,
          name: "",
          describe: "",
          image: "",
          time: 1.5,
        },
        {
          id: 5,
          name: "",
          describe: "",
          image: "",
          time: 1.5,
          nextStepId: 6,
        },
        {
          id: 4,
          name: "",
          describe: "",
          image: "",
          time: 1.5,
          nextStepId: 5,
        },
        {
          id: 3,
          name: "",
          describe: "",
          image: "",
          time: 1.5,
        },
        {
          id: 2,
          name: "",
          describe: "",
          image: "",
          time: 1.5,
          nextStepId: 3,
        },
        {
          id: 1,
          name: "",
          describe: "",
          image: "",
          time: 1.5,
          nextStepId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Steps", null, {});
  },
};
