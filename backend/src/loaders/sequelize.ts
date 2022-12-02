import { Sequelize } from "sequelize";
import config from "@config";
import LoggerInstance from "./logger";

export default async () => {
  const sequelizeInstance = new Sequelize(config.db, {
    logging: (msg) => LoggerInstance.debug(msg),
  });

  await sequelizeInstance.authenticate();

  return sequelizeInstance;
};
