import userModel from "@models/User";
import { DataTypes, Sequelize } from "sequelize";
import { Logger } from "winston";
import Container from "typedi";
import User from "@models/User";
import Apply from "./Apply";
import Score from "./Score";
import Resume from "./Resume";
import Notice from "./Notice";
import sequelize from "@loaders/sequelize";

export default async (sequelizeInstance: Sequelize) => {
  const userModel = User(sequelizeInstance);
  const scoreModel = Score(sequelizeInstance);
  const applyModel = Apply(sequelizeInstance);
  const resumeModel = Resume(sequelizeInstance);
  const noticeModel = Notice(sequelizeInstance);
  const logger: Logger = Container.get("logger");

  await sequelizeInstance.sync();
};
