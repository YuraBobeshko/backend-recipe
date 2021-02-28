"use strict";
import { Model } from "sequelize";

export default class RecipeType extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        recipeId: {
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
    this.belongsTo(models.Recipe);
    this.belongsTo(models.Type);
  }
}
