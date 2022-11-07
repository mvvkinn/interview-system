import expressLoader from "./express";
import { Application } from "express";
import dependencyInjector from "./dependencyInjector";
import LoggerInstance from "./logger";
import sequelize from "./sequelize";

export default async (expressApp: Application) => {
  const sequelizeInstance = await sequelize();
  LoggerInstance.info("DB Loaded");

  await dependencyInjector(sequelizeInstance);
  LoggerInstance.info("Dependency Loaded");

  await expressLoader(expressApp);
  LoggerInstance.info("Express Loaded");
};
