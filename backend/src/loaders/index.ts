import expressLoader from "./express";
import { Application } from "express";
import dependencyInjector from "./dependencyInjector";
import LoggerInstance from "./logger";
import sequelize from "./sequelize";
import { Server } from "http";

export default async (expressApp: Application, httpServer: Server) => {
  const sequelizeInstance = await sequelize();
  LoggerInstance.info("DB Loaded");

  await dependencyInjector(sequelizeInstance, httpServer);
  LoggerInstance.info("Dependency Loaded");

  await expressLoader(expressApp);
  LoggerInstance.info("Express Loaded");
};
