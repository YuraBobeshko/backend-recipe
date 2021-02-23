module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "recipes",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: 0,
    seederStorage: "sequelize",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    seederStorage: "sequelize",
    operatorsAliases: 0,
  },
};
