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
              <p>{{ applicant.user_name }}</p>
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
        <div id="onMain_leftArea" :class="{ addForm: role !== 'user' }">
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
        <form
          id="onMain_rightArea"
          @submit.prevent="submitForm()"
          v-if="role !== 'user'"
        >
          <div class="scoreBoard_topArea" id="topArea_interviewTitle">
            <div class="scoreBoaed_title">
              <p id="online_boldText">면접명</p>
            </div>
            <div class="scoreBoaed_value">
              <p>{{ applicant.title }}</p>
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
                v-model="question_one"
                ref="question_one"
                tyep="text"
                :class="{ error: inputError.question_one }"
              ></textarea>
              <p class="error_txt">{{ inputErrorMsg }}</p>
              <div class="questionBox_score">
                <input
                  type="text"
                  class="question_Score"
                  placeholder="00"
                  :value="score_one"
                  @input="checkInput($event, '1')"
                  ref="score_one"
                  min="1"
                  max="100"
                  maxlength="3"
                  :class="{ error: inputError.score_one }"
                />
                <p class="error_txt">{{ inputErrorMsg }}</p>
              </div>
            </div>
          </div>
          <div class="scoreBoard_question">
            <p id="online_boldText">질문2</p>
            <div class="scoreBoard_questionBox">
              <textarea
                class="questionBox_content"
                placeholder="질문 내용을 입력해주세요."
                v-model="question_two"
                ref="question_two"
                tyep="text"
                :class="{ error: inputError.question_two }"
              ></textarea>
              <p class="error_txt">{{ inputErrorMsg }}</p>
              <div class="questionBox_score">
                <input
                  type="text"
                  class="question_Score"
                  placeholder="00"
                  :value="score_two"
                  @input="checkInput($event, '2')"
                  ref="score_two"
                  min="1"
                  max="100"
                  maxlength="3"
                  :class="{ error: inputError.score_two }"
                />
                <p class="error_txt">{{ inputErrorMsg }}</p>
              </div>
            </div>
          </div>
          <div class="scoreBoard_question">
            <p id="online_boldText">질문3</p>
            <div class="scoreBoard_questionBox">
              <textarea
                class="questionBox_content"
                placeholder="질문 내용을 입력해주세요."
                v-model="question_three"
                ref="question_three"
                tyep="text"
                :class="{ error: inputError.question_three }"
              ></textarea>
              <p class="error_txt">{{ inputErrorMsg }}</p>
              <div class="questionBox_score">
                <input
                  type="text"
                  class="question_Score"
                  placeholder="00"
                  :value="score_three"
                  @input="checkInput($event, '3')"
                  ref="score_three"
                  min="1"
                  max="100"
                  maxlength="3"
                  :class="{ error: inputError.score_three }"
                />
                <p class="error_txt">{{ inputErrorMsg }}</p>
              </div>
            </div>
          </div>
          <div class="scoreBoard_question">
            <p id="online_boldText">추가질문</p>
            <textarea
              class="questionBox_addQuest"
              placeholder="질문 내용을 입력해주세요."
              v-model="add_question"
            ></textarea>
          </div>
          <div class="scoreBoard_btnArea">
            <button class="scoreBoard_btn" id="scoreBoard_whiteBtn">
              저장
            </button>
            <button class="scoreBoard_btn" id="scoreBoard_redBtn" type="submit">
              제출
            </button>
          </div>
        </form>
      </div>
    </body>
  </div>
</template>

<script>
import { initCall, toggleMute, toggleCamera, pc } from "@/plugins/stream";
import { store } from "@/store";
import router from "@/router";
import axios from "axios";

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
      //  -- question, score --
      question_one: "",
      question_two: "",
      question_three: "",
      score_one: "",
      score_two: "",
      score_three: "",
      add_question: "",
      email: JSON.parse(localStorage.getItem("user")).email,
      role: JSON.parse(localStorage.getItem("user")).role,
      isEmpty: false,
      inputError: {
        question_one: false,
        question_two: false,
        question_three: false,
        score_one: false,
        score_two: false,
        score_three: false,
      },
      inputErrorMsg: "",
      //  -- video meeting --
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
      roomName: this.$route.params.roomName,
      pcObj: {},
      videoHeight: 100,
      peerConnection: null,
      userName: JSON.parse(localStorage.getItem("user")).name,
      applicant: {},
    };
  },
  async beforeRouteEnter(to, from, next) {
    const applicant = await axios.get(
      `/apply/applicant?intereview_number=${to.params.roomName}`
    );
    next((vm) => {
      vm.applicant = applicant.data;
    });
  },
  watch: {
    question_one() {
      if (this.question_one.trim() !== "") {
        this.inputError.question_one = false;
      }
    },
    question_two() {
      if (this.question_two.trim() !== "") {
        this.inputError.question_two = false;
      }
    },
    question_three() {
      if (this.question_three.trim() !== "") {
        this.inputError.question_three = false;
      }
    },
    score_one() {
      if (this.score_one.trim() !== "") {
        this.inputError.score_one = false;
      }
    },
    score_two() {
      if (this.score_two.trim() !== "") {
        this.inputError.score_two = false;
      }
    },
    score_three() {
      if (this.score_three.trim() !== "") {
        this.inputError.score_three = false;
      }
    },
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
        this.leaveRoom();
        clearInterval();
      }
    },
    submitForm() {
      const data = {
        question_one: this.question_one,
        score_one: this.score_one,
        question_two: this.question_two,
        score_two: this.score_two,
        question_three: this.question_three,
        score_three: this.score_three,
        add_question: this.add_question,
        id: JSON.parse(localStorage.getItem("user")).id,
        name: this.applicant.user_name,
        email: JSON.parse(localStorage.getItem("user")).email,
      };
      const arrayValue = Object.values(data);
      focus: {
        for (let i in arrayValue) {
          if (arrayValue[i] === "") {
            this.isEmpty = true;
            switch (+i) {
              case 0:
                this.$refs.question_one.focus();
                this.inputError.question_one = true;
                this.inputErrorMsg = "질문을 입력해주세요.";
                break focus;
              case 1:
                this.$refs.score_one.focus();
                this.inputError.score_one = true;
                this.inputErrorMsg = "점수를 입력해주세요.";
                break focus;
              case 2:
                this.$refs.question_two.focus();
                this.inputError.question_two = true;
                this.inputErrorMsg = "질문을 입력해주세요.";
                break focus;
              case 3:
                this.$refs.score_two.focus();
                this.inputError.score_two = true;
                this.inputErrorMsg = "점수를 입력해주세요.";
                break focus;
              case 4:
                this.$refs.question_three.focus();
                this.inputError.question_three = true;
                this.inputErrorMsg = "질문을 입력해주세요.";
                break focus;
              case 5:
                this.$refs.score_three.focus();
                this.inputError.score_three = true;
                this.inputErrorMsg = "점수를 입력해주세요.";
                break focus;
              case 6:
                break focus;
            }
          } else {
            this.isEmpty = false;
          }
        }
      }
      if (this.isEmpty === false) {
        store.dispatch("score", { ...data }).then(() => {
          this.leaveRoom();
        });
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
    },

    removeVideo(leavedSocketId) {
      const delIndex = this.peerVideo.indexOf(
        this.peerVideo.find((obj) =>
          Object.entries(obj)[0].includes(leavedSocketId.toString())
        )
      );
      this.peerVideo.splice(delIndex, 1);
    },

    leaveRoom() {
      this.socket.disconnect();
      this.myStream.getTracks().forEach((track) => track.stop());
      router.push("/admin/progress/");
    },

    checkInput(e, index) {
      switch (+index) {
        case 1:
          this.score_one = e.target.value.replace(/\D{0,3}$/g, "");
          e.target.value = this.score_one;
          break;
        case 2:
          this.score_two = e.target.value.replace(/\D[0,100]{0,3}$/g, "");
          e.target.value = this.score_two;
          break;
        case 3:
          this.score_three = e.target.value.replace(/\D[0,100]{0,3}$/g, "");
          e.target.value = this.score_three;
          break;
      }
    },
  },
  destroyed() {
    this.count();
  },

  updated() {
    if (!this.peerVideo.length) {
      this.isPeer = false;
    }
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
    this.socket.on("join", async (userObjArr) => {
      this.myStream = await initCall();
      this.myVideo = this.myStream;
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
.info_input_area {
  position: relative;
}
.error_txt {
  display: none;
}

textarea.error {
  border: 2px solid red;
}

textarea.error:focus {
  border: 2px solid red;
}

textarea:focus {
  outline: none;
}

input.error {
  border: 2px solid red;
}

input.error:focus {
  border: 2px solid red;
}

input:focus {
  outline: none;
}

.scoreBoard_questionBox > .error + .error_txt {
  color: red !important;
}
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

#onMain_leftArea {
  width: 100%;
}
.addForm {
  width: 63.5%;
}
</style>
