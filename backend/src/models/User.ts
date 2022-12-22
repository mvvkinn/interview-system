import { IUser, IUserSignInDTO } from "@interfaces/IUser";
import { DataTypes, Sequelize } from "sequelize";
import Container from "typedi";
import { Logger } from "winston";

//export const User = new Model<IUser & Document>("user");

export default (db: Sequelize) => {
  const userModel = db.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      salt: { type: DataTypes.STRING, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      gender: {
        type: DataTypes.CHAR,
        allowNull: false,
        validate: {
          isIn: { args: [["m", "f"]], msg: "set 'm' as male, 'f' as female" },
        },
      },
      birthdate: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING, unique: true },
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

  // await db.sync();

  return userModel;
};
