import { Server } from "socket.io";
import { Server as httpServer } from "http";
import LoggerInstance from "./logger";

export default (httpServer: httpServer) => {
  const io = new Server(httpServer, {
    cors: { origin: "http://localhost:8080" },
  });

  io.on("connection", socket => {
    LoggerInstance.info(`${socket.id} connected`);
  });

  return io;
};
