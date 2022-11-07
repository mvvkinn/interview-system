import { IUser, IUserSignInDTO } from "@interfaces/IUser";
import { DataTypes, Sequelize } from "sequelize";
import Container from "typedi";
import { Logger } from "winston";

//export const User = new Model<IUser & Document>("user");

export default async (db: Sequelize) => {
  const logger: Logger = Container.get("logger");
  const userModel = db.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      salt: { type: DataTypes.STRING, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      gender: { type: DataTypes.CHAR, allowNull: false },
      birthdate: { type: DataTypes.DATE, allowNull: false },
      phone: DataTypes.STRING,
      zipcode: DataTypes.STRING,
      address: DataTypes.STRING,
      recieve_info: DataTypes.BOOLEAN,
      role: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [["user", "recruiter", "admin"]],
            msg: "Must be user, recruiter, admin",
          },
        },
      },
    },
    { tableName: "User", timestamps: false }
  );

  await db.sync();

  return userModel;
};
