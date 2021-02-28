import { sequelize } from "../models";

(async () => {
  await sequelize.drop({ cascade: true });
  await sequelize.query("TRUNCATE `sequelizedata`;");
  await sequelize.query("DELETE FROM `sequelizemeta`;");
  process.exit(0);
})();
