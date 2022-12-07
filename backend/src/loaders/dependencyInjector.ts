import { Sequelize } from "sequelize";
import { Container } from "typedi";
import LoggerInstance from "./logger";
import socketIOInstance from "./socket.io";
import Apply from "@models/Apply";
import { Server } from "http";
import models from "@models/index";
import Score from "@models/Score";
import User from "@models/User";

export default async (sequelizeInstance: Sequelize, httpServer: Server) => {
  Container.set("logger", LoggerInstance);

  Container.set("db", sequelizeInstance);

  models(sequelizeInstance);

  Container.set("applyModel", Apply(sequelizeInstance));
  Container.set("userModel", User(sequelizeInstance));

  Container.set("scoreModel", Score(sequelizeInstance));
  Container.set("userModel", User(sequelizeInstance));
};
