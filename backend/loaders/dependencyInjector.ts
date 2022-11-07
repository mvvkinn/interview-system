import { Sequelize } from "sequelize";
import { Container } from "typedi";
import LoggerInstance from "./logger";
import User from "@models/User";

export default (sequelizeInstance: Sequelize) => {
  Container.set("logger", LoggerInstance);

  Container.set("db", sequelizeInstance);

  Container.set("userModel", User(sequelizeInstance));
};
