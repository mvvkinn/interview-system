import { Sequelize } from "sequelize";
import { Container } from "typedi";
import LoggerInstance from "./logger";
import models from "@models";

export default async (sequelizeInstance: Sequelize) => {
  Container.set("logger", LoggerInstance);

  Container.set("db", sequelizeInstance);

  await models(sequelizeInstance);
};
