"use strict";
import { Model } from "sequelize";

export default class Dish extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        countPerson: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        timeEat: DataTypes.ENUM("MORNING", "LUNCH", "DINNER", "ALL_DAY"),
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        kitchenId: {
          type: DataTypes.INTEGER,
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
    this.belongsTo(models.Kitchen);
    this.belongsTo(models.User);
    this.hasMany(models.DishTag);
    this.hasMany(models.DishType);
    this.hasMany(models.Recipe);
    this.hasMany(models.Comment, {
      foreignKey: "modelId",
      constraints: false,
      scope: {
        commentable: "dish",
      },
    });
    this.belongsToMany(models.Tag, { through: "DishTag" });
    this.belongsToMany(models.Type, { through: "DishType" });
  }
}
