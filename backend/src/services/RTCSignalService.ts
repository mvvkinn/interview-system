import Container from "typedi";
import { Server } from "socket.io";
import { Logger } from "winston";

export default () => {
  const logger: Logger = Container.get("logger");
  const io: Server<any> = Container.get("socketIO");

  interface User {
    socketId: string;
  }

  interface TargetRoomObj {
    roomName: string;
    currentNum: number;
    user: Array<User>;
  }

  let roomObjArr: any[] = [
    // {
    //   roomName,
    //   currentNum,
    //   user: [
    //     {socketId}
    //   ]
    // },
  ];
  const MAXIMUM = 4;

  io.on("connection", (socket) => {
    let myRoomName = "";
    socket.on("joinRoom", (roomName: string) => {
      myRoomName = roomName;
      let isRoomExist = false;
      let targetRoomObj: TargetRoomObj = {
        roomName,
        currentNum: 0,
        user: [],
      };

      for (let i = 0; i < roomObjArr.length; ++i) {
        if (roomObjArr[i].roomName === roomName) {
          // Reject join the room
          if (roomObjArr[i].currentNum >= MAXIMUM) {
            socket.emit("reject_join");
            return;
          }

          isRoomExist = true;
          targetRoomObj = roomObjArr[i];
          console.log(targetRoomObj);
          break;
        }
      }

      // Create room
      if (!isRoomExist) {
        targetRoomObj = {
          roomName,
          currentNum: 0,
          user: [],
        };
        roomObjArr.push(targetRoomObj);
      }

      //Join the room
      targetRoomObj.user.push({
        socketId: socket.id,
      });
      ++targetRoomObj.currentNum;

      console.log(targetRoomObj);
      socket.join(roomName);
      // emitting event after join room
      socket.to(roomName).emit("join", targetRoomObj.user);
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
