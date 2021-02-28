"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          firstName: "",
          lastName: "",
          email: "gorobech51@gmail.com",
          authKey: "",
          passwordHash: "",
        },
        {
          id: 2,
          firstName: "",
          lastName: "",
          email: "gorobech52@gmail.com",
          authKey: "",
          passwordHash: "",
        },
        {
          id: 3,
          firstName: "",
          lastName: "",
          email: "gorobech53@gmail.com",
          authKey: "",
          passwordHash: "",
        },
        {
          id: 4,
          firstName: "",
          lastName: "",
          email: "gorobech54@gmail.com",
          authKey: "",
          passwordHash: "",
        },
        {
          id: 5,
          firstName: "",
          lastName: "",
          email: "gorobech55@gmail.com",
          authKey: "",
          passwordHash: "",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
