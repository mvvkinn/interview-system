import Container from "typedi";
import { Server } from "socket.io";
import { Logger } from "winston";

export default () => {
  const logger: Logger = Container.get("logger");
  const io: Server<any> = Container.get("socketIO");

  io.on("connection", socket => {
    socket.on("joinRoom", (roomName: string) => {
      socket.join(roomName);

      // emitting event after join room
      socket.to(roomName).emit("join");
    });

    socket.on("offer", (offer: object, roomName: string) => {
      logger.info(`relaying offer to ${roomName} from ${socket.id}`);
      socket.to(roomName).emit("offer", offer);
    });

    socket.on("answer", (answer: object, roomName: string) => {
      logger.info(`relaying answer to ${roomName} from ${socket.id}`);
      socket.to(roomName).emit("answer", answer);
    });

    socket.on("candidate", (ice: object, roomName: string) => {
      logger.info(`relaying candidate to ${roomName} from ${socket.id}`);
      socket.to(roomName).emit("candidate", ice);
    });
  });
};
