<template>
  <div>
    <body class="online_body">
      <div class="onTitle">
        <div class="onTitle_sideArea"></div>
        <div class="onTitle_centerArea">화상면접</div>
        <div class="onTitle_sideArea">
          <div class="sideArea_object">
            <div class="sideObject_title" id="objectTitle_gray">
              <p id="applicantName">지원자</p>
            </div>
            <div class="sideObject_value" id="objectValue_gray">
              <p>김명지</p>
            </div>
          </div>
          <div class="sideArea_object">
            <div class="sideObject_title" id="objectTitle_red">
              <p>남은시간</p>
            </div>
            <div class="sideObject_value" id="objectValue_red">
              <p ref="onlineTimer">{{ text_timer }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="onMain">
        <div id="onMain_leftArea">
          <div class="mainLeft_camArea">
            <div class="cam_top" :class="{ addPeer: isPeer }">
              <video
                autoplay
                playsinline
                :ref="myVideoId"
                :src-object.prop.camel="myVideo"
              ></video>
            </div>
            <div class="camArea_bottom" v-if="peerVideo.length">
              <div class="subCam" v-for="(peer, i) in peerVideo" :key="i">
                <video
                  autoplay
                  playsinline
                  :id="peer.id"
                  :src-object.prop.camel="peer.stream"
                ></video>
              </div>
            </div>
          </div>
          <div class="mainLeft_btnArea">
            <div class="online_Btn" id="micBtn" @click="toggleMute">
              <img
                src="../assets/images/icons/icon_mic_green.png"
                class="icon_mic_green"
              />
              {{ text_mute }}
            </div>
            <div class="online_Btn" id="camBtn" @click="toggleCamera">
              <img
                src="../assets/images/icons/icon_cam_green.png"
                class="icon_cam_green"
              />
              {{ text_video }}
            </div>
            <div class="online_Btn" id="scoreBtn" @click="leaveRoom()">
              <img
                src="../assets/images/icons/icon_checkscore.png"
                class="icon_checkscore"
              />
            </div>
            <div class="online_Btn" id="ectBtn">ㆍㆍㆍ</div>
          </div>
        </div>
        <div id="onMain_rightArea">
          <div class="scoreBoard_topArea" id="topArea_interviewTitle">
            <div class="scoreBoaed_title">
              <p id="online_boldText">면접명</p>
            </div>
            <div class="scoreBoaed_value">
              <p>2022년도 하반기 OOOOO 프론트엔드 개발자 모집</p>
            </div>
          </div>
          <div class="scoreBoard_topArea" id="topArea_standard">
            <div class="scoreBoaed_title">
              <p id="online_boldText">평가기준</p>
            </div>
            <div class="scoreBoaed_value">
              <p>
                프론트엔드 업무에 대한 전반적인 이해 및 업무능력 평가. 관련 자격
                및 업무 커뮤니케이션 능력 평가.
              </p>
            </div>
          </div>
          <div class="scoreBoard_question">
            <p id="online_boldText">질문1</p>
            <div class="scoreBoard_questionBox">
              <textarea
                class="questionBox_content"
                placeholder="질문 내용을 입력해주세요."
              ></textarea>
              <div class="questionBox_score">
                <input type="text" class="question_Score" placeholder="00" />
              </div>
            </div>
          </div>
          <div class="scoreBoard_question">
            <p id="online_boldText">질문2</p>
            <div class="scoreBoard_questionBox">
              <textarea
                class="questionBox_content"
                placeholder="질문 내용을 입력해주세요."
              ></textarea>
              <div class="questionBox_score">
                <input type="text" class="question_Score" placeholder="00" />
              </div>
            </div>
          </div>
          <div class="scoreBoard_question">
            <p id="online_boldText">질문3</p>
            <div class="scoreBoard_questionBox">
              <textarea
                class="questionBox_content"
                placeholder="질문 내용을 입력해주세요."
              ></textarea>
              <div class="questionBox_score">
                <input type="text" class="question_Score" placeholder="00" />
              </div>
            </div>
          </div>
          <div class="scoreBoard_question">
            <p id="online_boldText">추가질문</p>
            <textarea
              class="questionBox_addQuest"
              placeholder="질문 내용을 입력해주세요."
            ></textarea>
          </div>
          <div class="scoreBoard_btnArea">
            <div class="scoreBoard_btn" id="scoreBoard_whiteBtn">저장</div>
            <div class="scoreBoard_btn" id="scoreBoard_redBtn">제출</div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import { initCall, toggleMute, toggleCamera, pc } from "@/plugins/stream";

export default {
  data() {
    return {
      time: 600,
      min: 0,
      sec: 0,
      text_timer: "",
      text_mute: "MUTE",
      text_video: "CAMERA OFF",
      onlineTimer: 0,
      myVideo: null,
      myVideoId: "",
      peerVideo: [
        // {
        //   stream: [],
        //   id: [],
        // },
      ],
      isPeer: false,
      myStream: null,
      isMuted: false,
      isCameraOn: true,
      socket: null,
      roomName: this.$route.query.roomName,
      pcObj: {},
      videoHeight: 100,
      peerConnection: null,
    };
  },
  methods: {
    // Interview Timer
    count() {
      this.min = parseInt(this.time / 60);
      this.sec = this.time % 60;

      if (this.min < 10) {
        this.min = "0" + this.min;
      }
      if (this.sec < 10) {
        this.sec = "0" + this.sec;
      }
      this.text_timer = `${this.min} : ${this.sec}`;
      this.time--;

      if (this.time < 0) {
        clearInterval();
      }
    },

    /**
     * mute on / off
     */
    toggleMute() {
      this.text_mute = toggleMute(this.isMuted);
    },

    /**
     * camera on / off
     */
    toggleCamera() {
      this.text_video = toggleCamera(this.isCameraOn);
    },

    createConnection(remoteSocketId) {
      this.peerConnection = pc();

      this.peerConnection.addEventListener("icecandidate", async (iceData) => {
        try {
          if (iceData.candidate) {
            await this.socket.emit(
              "candidate",
              iceData.candidate,
              remoteSocketId
            );
          }
        } catch (err) {
          console.log(err);
        }
      });

      this.peerConnection.addEventListener(
        "track",
        (trackData) => this.paintPeerFace(trackData, remoteSocketId),
        false
      );

      this.pcObj[remoteSocketId] = this.peerConnection;

      this.myStream
        .getTracks()
        .forEach((track) => this.peerConnection.addTrack(track, this.myStream));
      return this.peerConnection;
    },

    // show peerVideo
    paintPeerFace(peerStream, remoteSocketId) {
      if (
        !this.peerVideo.some((obj) =>
          Object.entries(obj)[0].includes(peerStream.streams[0])
        )
      ) {
        this.peerVideo.push({
          stream: peerStream.streams[0],
          id: remoteSocketId,
        });
        this.isPeer = true;
      }

      // if (!this.peerVideo.includes(peerStream.streams[0])) {
      //   this.peerVideo.push(peerStream.streams[0]);
      //   this.isPeer = true;
      // }
    },

    removeVideo(leavedSocketId) {
      console.log("leave", leavedSocketId);
      console.log(this.myStream);
      this.peerVideo.splice();
    },

    leaveRoom() {
      this.socket.disconnect();
      this.myStream.getTracks().forEach((track) => track.stop());
    },
  },

  destroyed() {
    this.count();
  },

  async mounted() {
    await this.$loadScript("/socket.io/socket.io.js");

    // eslint-disable-next-line no-undef
    this.socket = io();
    this.socket.emit("joinRoom", this.roomName);

    /**
     * event on join
     * Send local offer to remote
     */
    this.socket.on("join", async (userObjArr, mySocketId) => {
      this.myStream = await initCall();
      this.myVideo = this.myStream;
      // this.$refs.myVideoId.id = mySocketId;
      console.log(mySocketId);
      const length = userObjArr.length;
      if (length === 1) {
        return;
      }

      for (let i = 0; i < length - 1; ++i) {
        try {
          const newPC = this.createConnection(userObjArr[i].socketId);
          const offer = await newPC.createOffer();

          newPC.setLocalDescription(offer);
          this.socket.emit("offer", offer, userObjArr[i].socketId);
        } catch (err) {
          console.error(err);
        }
      }
    });

    /**
     * event on recieved offer
     * set remote peer offer
     */
    this.socket.on("offer", async (offer, remoteSocketId) => {
      try {
        const newPC = this.createConnection(remoteSocketId);
        await newPC.setRemoteDescription(offer);

        const answer = await newPC.createAnswer();
        newPC.setLocalDescription(answer);
        this.socket.emit("answer", answer, remoteSocketId);
      } catch (err) {
        console.error(err);
      }
    });

    this.socket.on("answer", (answer, remoteSocketId) => {
      this.pcObj[remoteSocketId].setRemoteDescription(answer);
    });

    /**
     * set remote ICECandidate
     */
    this.socket.on("candidate", (ice, remoteSocketId) => {
      this.pcObj[remoteSocketId].addIceCandidate(ice);
    });

    this.socket.on("leave_room", (leavedSocketId) => {
      this.removeVideo(leavedSocketId);
    });

    this.socket.on("reject_join", () => {
      // Erase names
      this.roomName = "";
    });

    setInterval(() => {
      this.count();
    }, 1000);
  },
};
</script>

<style scoped>
.cam_top {
  height: 100%;
}

.cam_top video {
  margin: auto;
  width: 100%;
  height: 100%;
}

.addPeer {
  height: 75%;
}

.mainLeft_camArea {
  height: 640px;
}

.subCam {
  display: flex;
}

.subCam video {
  width: 100%;
  height: 100%;
  margin: auto;
}
</style>
