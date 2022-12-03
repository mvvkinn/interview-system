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
                :src-object.prop.camel="myCamera"
              ></video>
            </div>
            <div class="camArea_right">
              <div class="camArea" id="myCam"></div>
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
//import { initCall } from "@/plugins/socket";

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
      myCamera: null,
      myStream: {},
      isMuted: false,
      isCameraOn: true,
      roomName: this.$route.query.roomName,
      pcObj: {},
    };
  },

  mounted() {
    setInterval(() => {
      this.count();
    }, 1000);
  },

  async created() {
    await this.$loadScript("/socket.io/socket.io.js");

    // eslint-disable-next-line no-undef
    const socket = io();

    socket.on("connect", async () => {
      this.myCamera = await this.initCall();
      console.log("connect");
    });

    socket.emit("joinRoom", "room1");

    socket.on("join", async () => {
      try {
        this.myCamera = await this.initCall();
        console.log("join");
      } catch (err) {
        console.log(err);
      }
    });
  },

  methods: {
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

    async getCameras() {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cameras = devices.filter(device => device.kind === "videoinput");
        const currentCamera = this.myStream.getVideoTracks();

        // Camera selector
        cameras.forEach(camera => {
          const option = document.createElement("option");
          option.value = camera.deviceId;
          option.innerText = camera.label;
          if (currentCamera.label === camera.label) {
            option.selected = true;
          }
          // camerasSelect.appendChild(option);
        });
        console.log(cameras);
      } catch (e) {
        console.log(e);
      }
    },

    async getMedia(myCamera, deviceId) {
      // deviceId가 없을 경우 초기 상태
      const initialConstrains = {
        audio: true,
        video: { facingMode: "user" },
      };

      // deviceId가 있을 경우
      const cameraConstrains = {
        audio: true,
        video: { deviceId: { exact: deviceId } },
      };
      try {
        this.myStream = await navigator.mediaDevices.getUserMedia(
          deviceId ? cameraConstrains : initialConstrains
        );
        console.log(this.myStream);
        // myCamera.srcObject = myStream;
        if (!deviceId) {
          await this.getCameras();
        }
        return this.myStream;
      } catch (e) {
        console.log(e);
      }
    },

    async initCall() {
      console.log("initCall");
      return await this.getMedia();
    },
  },

  destroyed() {
    this.count();
  },
};
</script>

<style scoped>
video {
  width: 100%;
  height: 100%;
}
</style>
