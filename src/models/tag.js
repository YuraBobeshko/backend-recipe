"use strict";
import { Model } from "sequelize";

export default class Tag extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        icon: {
          type: DataTypes.STRING,
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
    this.hasMany(models.DishTag);
    this.belongsToMany(models.Dish, { through: "DishTag" });
  }
}
