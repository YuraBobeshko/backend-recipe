"use strict";
import { Model } from "sequelize";

export default class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        firstName: { type: DataTypes.STRING(30), allowNull: false },
        lastName: { type: DataTypes.STRING(30), allowNull: false },
        email: {
          type: DataTypes.STRING(80),
          unique: true,
          validate: {
            isEmail: true,
          },
          allowNull: false,
        },
        authKey: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        passwordHash: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        avatar: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Dish);
    this.hasMany(models.Recipe);
    this.hasMany(models.BookmarkedUser, {
      foreignKey: "selecterId",
      as: "selecterId",
    });
    this.hasMany(models.BookmarkedUser, {
      foreignKey: "selectedId",
      as: "selectedId",
    });
    this.hasMany(models.Comment, {
      foreignKey: "modelId",
      constraints: false,
      scope: {
        commentable: "user",
      },
    });
    this.belongsToMany(models.User, {
      through: "BookmarkedUser",
      as: "bookmarkedUsers",
    });
    this.belongsToMany(models.Dish, {
      through: "BookmarkedDish",
      as: "bookmarkedDishes",
    });
    this.belongsToMany(models.Dish, {
      through: "BookmarkedRecipe",
      as: "bookmarkedRecipes",
    });
  }
}
