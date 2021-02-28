"use strict";
import { Model } from "sequelize";

export default class Step extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        describe: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        image: DataTypes.STRING,
        time: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        nextStepId: DataTypes.INTEGER,
      },
      {
        sequelize,
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.hasOne(models.Recipe, { foreignKey: "stepId" });
    this.belongsTo(models.Step, { foreignKey: "nextStepId" });
  }
}
