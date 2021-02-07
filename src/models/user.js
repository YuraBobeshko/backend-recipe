"use strict";
const { Model } = require("sequelize");

export default class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: {
          type: DataTypes.STRING,
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

  static associate(sequelize, DataTypes) {
    // define association here
  }

  static generatePassword() {
    const password = generator.generate({ length: 10, numbers: true });
    return {
      password,
      passwordHash: crypt.generate(password, { saltLength: 13 }),
    };
  }

  async validatePassword(password) {
    return crypt.verify(password, this.passwordHash);
  }

  static hashPassword(password) {
    return crypt.generate(password, { saltLength: 13 });
  }

  static getUserByToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, authorizationTokenSecret, async (error, authKey) => {
        if (error) {
          return resolve(null);
        }
        const user = await this.findOne({
          where: {
            authKey: authKey.data,
          },
        });

        if (!user) {
          return resolve(null);
        }

        return resolve(user);
      });
    });
  }

  login = () =>
    jwt.sign({ data: this.authKey }, authorizationTokenSecret, {
      expiresIn: authorizationTokenExpire,
    });
}
