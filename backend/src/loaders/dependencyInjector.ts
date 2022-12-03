import { Sequelize } from "sequelize";
import { Container } from "typedi";
import LoggerInstance from "./logger";
<<<<<<< HEAD
import models from "@models";

export default async (sequelizeInstance: Sequelize) => {
=======
import socketIOInstance from "./socket.io";
import User from "@models/User";
import { Server } from "http";
import RTCSignalService from "@services/RTCSignalService";

export default (sequelizeInstance: Sequelize, httpServer: Server) => {
>>>>>>> d2032f7010b2dec73149d72b5a17b25109fd2812
  Container.set("logger", LoggerInstance);

  Container.set("db", sequelizeInstance);

<<<<<<< HEAD
  await models(sequelizeInstance);
=======
  Container.set("userModel", User(sequelizeInstance));

  Container.set("socketIO", socketIOInstance(httpServer));

  RTCSignalService();
>>>>>>> d2032f7010b2dec73149d72b5a17b25109fd2812
};
