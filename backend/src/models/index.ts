import userModel from "@models/User";
import { DataTypes, Sequelize } from "sequelize";
import { Logger } from "winston";
import Container from "typedi";
import User from "@models/User";
import Apply from "./Apply";

export default async (sequelizeInstance: Sequelize) => {
  const userModel = User(sequelizeInstance);
  const applyModel = Apply(sequelizeInstance);

  const logger: Logger = Container.get("logger");

  userModel.hasMany(applyModel, {
    foreignKey: "user_id",
    sourceKey: "id",
    onDelete: "cascade",
    onUpdate: "cascade",
  });
  //   userModel.hasMany(applyModel, { foreignKey: "user_name", sourceKey: "name" });

  applyModel.belongsTo(userModel);
  //   applyModel.belongsTo(userModel);

  await sequelizeInstance.sync();
};
