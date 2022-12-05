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
  const MAXIMUM = 5;

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

      console.log(targetRoomObj.user);
      socket.join(roomName);
      // emitting event after join room
      socket.emit("join", targetRoomObj.user);
    });

    socket.on("offer", (offer: object, remoteSocketId: string) => {
      logger.info(`relaying offer to ${remoteSocketId} from ${socket.id}`);
      socket.to(remoteSocketId).emit("offer", offer, socket.id);
    });

    socket.on("answer", (answer: object, remoteSocketId: string) => {
      logger.info(`relaying answer to ${remoteSocketId} from ${socket.id}`);
      socket.to(remoteSocketId).emit("answer", answer, socket.id);
    });

    socket.on("candidate", (ice: object, remoteSocketId: string) => {
      logger.info(`relaying candidate to ${remoteSocketId} from ${socket.id}`);
      socket.to(remoteSocketId).emit("candidate", ice, socket.id);
    });

    socket.on("disconnecting", () => {
      socket.to(myRoomName).emit("leave_room", socket.id);

      let isRoomEmpty = false;
      for (let i = 0; i < roomObjArr.length; ++i) {
        if (roomObjArr[i].roomName === myRoomName) {
          const newUser = roomObjArr[i].user.filter(
            (sockeId: string) => sockeId != socket.id
          );
          roomObjArr[i].user = newUser;
          --roomObjArr[i].currentNum;

          if (roomObjArr[i].currentNum == 0) {
            isRoomEmpty = true;
          }
        }
      }

      // Delete room
      if (isRoomEmpty) {
        const newRoomObjArr = roomObjArr.filter(
          (roomObj) => roomObj.currentNum != 0
        );
        roomObjArr = newRoomObjArr;
      }
    });
  });
};
