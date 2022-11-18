import { Sequelize } from "sequelize";
import { Container } from "typedi";
import LoggerInstance from "./logger";
import User from "@models/User";
import Resume from "@models/Resume";

export default async (sequelizeInstance: Sequelize) => {
  Container.set("logger", LoggerInstance);

  Container.set("db", sequelizeInstance);

  Container.set("userModel", await User(sequelizeInstance));
  Container.set("resumeModel", Resume(sequelizeInstance));
  await sequelizeInstance.sync();
};
