"use strict";
import { Model } from "sequelize";

export default class RecipeTag extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        recipeId: {
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
    this.belongsTo(models.Recipe);
    this.belongsTo(models.Tag);
  }
}
