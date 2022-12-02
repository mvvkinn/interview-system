import { Sequelize } from "sequelize";
import { Container } from "typedi";
import LoggerInstance from "./logger";
import models from "@models";

export default (sequelizeInstance: Sequelize) => {
  Container.set("logger", LoggerInstance);

  Container.set("db", sequelizeInstance);

  // Container.set("userModel", User(sequelizeInstance));

  // Container.set("applyModel", Apply(sequelizeInstance));
  models(sequelizeInstance);
};
