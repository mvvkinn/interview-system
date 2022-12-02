import userModel from "@models/User";
import { DataTypes, Sequelize } from "sequelize";
import { Logger } from "winston";
import Container from "typedi";

export default async (db: Sequelize) => {
  const logger: Logger = Container.get("logger");
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
      birthdate: { type: DataTypes.DATE, allowNull: false },
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
  const applyModel = db.define(
    "Apply",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      //   user_id: { type: DataTypes.INTEGER },
      user_name: { type: DataTypes.STRING },
      interview_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      title: DataTypes.STRING,
    },
    { tableName: "Apply", timestamps: false }
  );
  userModel.hasMany(applyModel, {
    sourceKey: "id",
    onDelete: "cascade",
    onUpdate: "cascade",
  });
  //   userModel.hasMany(applyModel, { foreignKey: "user_name", sourceKey: "name" });

  applyModel.belongsTo(userModel);
  //   applyModel.belongsTo(userModel);
  await db.sync();
};
