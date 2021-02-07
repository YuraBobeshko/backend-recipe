"use strict";
import * as Sequelize from "sequelize";

export default class Comment extends Sequelize.Model {
  static associate(models) {
    this.hasMany(models.User);
  }

  static init(sequelize, DataTypes) {
    return super.init(
      {
        text: DataTypes.STRING,
        userId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "Comment",
      }
    );
  }
}
