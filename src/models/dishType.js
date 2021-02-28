"use strict";
import { Model } from "sequelize";

export default class DishType extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        dishesId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        typeId: {
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
    this.belongsTo(models.Dish);
    this.belongsTo(models.Type);
  }
}
