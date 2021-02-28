"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Dishes",
      [
        {
          id: 1,
          name: "",
          image: "",
          countPerson: 1,
          timeEat: "MORNING",
          userId: 1,
          kitchenId: 1,
        },
        {
          id: 2,
          name: "",
          image: "",
          countPerson: 1,
          timeEat: "LUNCH",
          userId: 1,
          kitchenId: 1,
        },
        {
          id: 3,
          name: "",
          image: "",
          countPerson: 1,
          timeEat: "DINNER",
          userId: 1,
          kitchenId: 1,
        },
        {
          id: 4,
          name: "",
          image: "",
          countPerson: 1,
          timeEat: "ALL_DAY",
          userId: 2,
          kitchenId: 1,
        },
        {
          id: 5,
          name: "",
          image: "",
          countPerson: 1,
          timeEat: "DINNER",
          userId: 2,
          kitchenId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Dishes", null, {});
  },
};
