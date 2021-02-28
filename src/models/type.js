"use strict";
import { Model } from "sequelize";

export default class Type extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        icon: DataTypes.STRING,
      },
      {
        sequelize,
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.DishType);
    this.belongsToMany(models.Dish, { through: "DishType" });
  }
}
