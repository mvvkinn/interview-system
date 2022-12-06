import { Server } from "socket.io";
import { Server as httpServer } from "http";
import LoggerInstance from "./logger";

export default (httpServer: httpServer) => {
  const io = new Server(httpServer);

  io.on("connection", socket => {
    LoggerInstance.info(`${socket.id} connected`);
  });

  return io;
};
