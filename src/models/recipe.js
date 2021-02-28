"use strict";
import { Model } from "sequelize";

export default class Recipe extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        time: DataTypes.FLOAT,
        image: DataTypes.STRING,
        dishId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        stepId: DataTypes.INTEGER,
      },
      {
        sequelize,
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Dish);
    this.belongsTo(models.User);
    this.belongsTo(models.Step);
    this.hasMany(models.RecipeTag);
    this.hasMany(models.RecipeType);
    this.hasMany(models.Comment, {
      foreignKey: "modelId",
      constraints: false,
      scope: {
        commentable: "recipe",
      },
    });
    this.belongsToMany(models.Tag, {
      through: models.RecipeTag,
    });
    this.belongsToMany(models.Type, {
      through: models.RecipeType,
    });
  }
}
