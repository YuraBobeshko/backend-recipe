"use strict";

import { Model } from "sequelize";

export default class BookmarkedUser extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        Id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
        userId: {
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
    this.belongsTo(models.User, { foreignKey: "Id", as: "selecterId" });
    this.belongsTo(models.User, { foreignKey: "userId", as: "selectedId" });
  }
}
