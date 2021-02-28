"use strict";
import { Model } from "sequelize";

export default class DishTag extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        dishId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        tagId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Dish);
    this.belongsTo(models.Tag);
  }
}
