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
            <div class="camArea_left">
              <video
                autoplay
                playsinline
                :src-object.prop.camel="myVideo"
              ></video>
            </div>
            <div class="camArea_right">
              <div class="camArea" id="myCam">
                <video
                  autoplay
                  playsinline
                  :src-object.prop.camel="peerVideo"
                ></video>
              </div>
              <div class="subCamArea">
                <div class="camArea" id="subCam"></div>
                <div class="camArea" id="subCam"></div>
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
            <div class="online_Btn" id="scoreBtn" onclick="closeScoreBoared();">
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
import { initCall, toggleMute, toggleCamera } from "@/plugins/stream";

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
      peerVideo: null,
      // myStream: navigator.mediaDevices.getUserMedia(),
      isMuted: false,
      isCameraOn: true,
      roomName: this.$route.query.roomName,
      pcObj: {},
      peerConnection: new RTCPeerConnection({
        iceServers: [
          {
            urls: [
              "stun:stun.l.google.com:19302",
              "stun:stun1.l.google.com:19302",
              "stun:stun2.l.google.com:19302",
              "stun:stun3.l.google.com:19302",
              "stun:stun4.l.google.com:19302",
            ],
          },
        ],
      }),
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
    toggleMute() {
      this.text_mute = toggleMute(this.text_mute, this.isMuted);
    },
    toggleCamera() {
      this.text_video = toggleCamera(this.text_video, this.isCameraOn);
    },
  },

  destroyed() {
    this.count();
  },
  async mounted() {
    await this.$loadScript("/socket.io/socket.io.js");

    // eslint-disable-next-line no-undef
    const socket = io();
    this.myVideo = await initCall(this.peerConnection);

    socket.emit("joinRoom", this.roomName);

    /**
     * event on join
     * Send local offer to remote
     */
    socket.on("join", async () => {
      console.log("join");

      // create offer and set to local description
      const offer = await this.peerConnection.createOffer();
      this.peerConnection.setLocalDescription(offer);

      // send Local offer to remote peer
      socket.emit("offer", offer, this.roomName);
    });

    /**
     * event on recieved offer
     * set remote peer offer
     */
    socket.on("offer", async (offer) => {
      console.log("recieved offer");

      this.peerConnection.setRemoteDescription(offer);

      // create answer and set to local description
      const answer = await this.peerConnection.createAnswer();
      this.peerConnection.setLocalDescription(answer);

      // send answer to remote peer
      socket.emit("answer", answer, this.roomName);
    });

    socket.on("answer", (answer) => {
      console.log("recieved answer");
      this.peerConnection.setRemoteDescription(answer);
    });

    /**
     * set remote ICECandidate
     */
    socket.on("candidate", (ice) => {
      console.log("recieved iceCandidate");

      this.peerConnection.addIceCandidate(ice);
    });

    this.peerConnection.addEventListener("icecandidate", (iceData) => {
      socket.emit("candidate", iceData.ice, this.roomName);
      console.log("ICECandidate sent");
    });

    this.peerConnection.addEventListener("addstream", (streamData) => {
      console.log("straemData.stream", streamData.stream);
      this.peerVideo = streamData.stream;
      console.log("peerVideo", this.peerVideo);
    });

    setInterval(() => {
      this.count();
    }, 1000);
  },
};
</script>

<style scoped>
video {
  width: 100%;
  height: 100%;
}
</style>
