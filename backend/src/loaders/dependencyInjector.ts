import { Sequelize } from "sequelize";
import { Container } from "typedi";
import LoggerInstance from "./logger";
import socketIOInstance from "./socket.io";
import User from "@models/User";
import { Server } from "http";
import RTCSignalService from "@services/RTCSignalService";

export default (sequelizeInstance: Sequelize, httpServer: Server) => {
  Container.set("logger", LoggerInstance);

  Container.set("db", sequelizeInstance);

  Container.set("userModel", User(sequelizeInstance));

  Container.set("socketIO", socketIOInstance(httpServer));

  RTCSignalService();
};
