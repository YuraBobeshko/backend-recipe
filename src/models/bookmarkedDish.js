"use strict";
import { Model } from "sequelize";

export default class bookmarkedDish extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        dishId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
      },
      {
        sequelize,
        timestamps: false,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User);
    this.belongsTo(models.Dish);
  }
}
