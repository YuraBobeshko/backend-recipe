"use strict";
import fs from "fs";
import path from "path";

const basename = path.basename(__filename);
const routers = [];

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => routers.push(require(path.join(__dirname, file)).default));

export default routers;
