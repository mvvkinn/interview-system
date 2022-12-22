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
            <div
              class="online_Btn"
              id="scoreBtn"
              @click="leaveRoom()"
              v-if="role !== 'user'"
            >
              <img
                src="../assets/images/icons/icon_checkscore.png"
                class="icon_checkscore"
              />
            </div>
            <div
              class="online_Btn"
              id="scoreBtn"
              @click="userLeaveRoom()"
              v-else
            >
              <img
                src="../assets/images/icons/icon_checkscore.png"
                class="icon_checkscore"
              />
            </div>
            <div class="online_Btn" id="ectBtn" @click="qrcode()">ㆍㆍㆍ</div>
            <img
              :src="image"
              alt=""
              style="width: 150px; height: 150px"
              v-if="isQRcode"
            />
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
              <p>{{ applicant.notice_title }}</p>
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
            <p id="online_boldText">태도/인성</p>
            <div class="scoreBoard_questionBox">
              <textarea
                class="questionBox_content"
                placeholder="의견을 입력해주세요."
                v-model="attitude_opinion"
                ref="attitude_opinion"
                tyep="text"
              ></textarea>
              <div class="questionBox_score">
                <input
                  type="text"
                  class="question_Score"
                  placeholder="00"
                  :value="attitude"
                  @input="checkInput($event, '1')"
                  ref="attitude"
                  min="1"
                  max="100"
                  maxlength="3"
                  :class="{ error: inputError.attitude }"
                />
              </div>
            </div>
          </div>
          <div class="scoreBoard_question">
            <p id="online_boldText">의사소통 능력</p>
            <div class="scoreBoard_questionBox">
              <textarea
                class="questionBox_content"
                placeholder="의견을 입력해주세요."
                v-model="communication_skills_opinion"
                ref="communication_skills_opinion"
                tyep="text"
              ></textarea>
              <div class="questionBox_score">
                <input
                  type="text"
                  class="question_Score"
                  placeholder="00"
                  :value="communication_skills"
                  @input="checkInput($event, '2')"
                  ref="communication_skills"
                  min="1"
                  max="100"
                  maxlength="3"
                  :class="{ error: inputError.communication_skills }"
                />
              </div>
            </div>
          </div>
          <div class="scoreBoard_question">
            <p id="online_boldText">논리적 사고</p>
            <div class="scoreBoard_questionBox">
              <textarea
                class="questionBox_content"
                placeholder="의견을 입력해주세요."
                v-model="logical_opinion"
                ref="logical_opinion"
                tyep="text"
              ></textarea>
              <div class="questionBox_score">
                <input
                  type="text"
                  class="question_Score"
                  placeholder="00"
                  :value="logical"
                  @input="checkInput($event, '3')"
                  ref="logical"
                  min="1"
                  max="100"
                  maxlength="3"
                  :class="{ error: inputError.logical }"
                />
              </div>
            </div>
          </div>
          <div class="scoreBoard_question">
            <p id="online_boldText">적극성/신뢰성</p>
            <div class="scoreBoard_questionBox">
              <textarea
                class="questionBox_content"
                placeholder="의견을 입력해주세요."
                v-model="reliability_opinion"
                ref="reliability_opinion"
                tyep="text"
              ></textarea>
              <div class="questionBox_score">
                <input
                  type="text"
                  class="question_Score"
                  placeholder="00"
                  :value="reliability"
                  @input="checkInput($event, '4')"
                  ref="reliability"
                  min="1"
                  max="100"
                  maxlength="3"
                  :class="{ error: inputError.reliability }"
                />
              </div>
            </div>
          </div>
          <div class="scoreBoard_question">
            <p id="online_boldText">창의력/판단력</p>
            <div class="scoreBoard_questionBox">
              <textarea
                class="questionBox_content"
                placeholder="의견을 입력해주세요."
                v-model="judgment_opinion"
                ref="judgment_opinion"
                tyep="text"
              ></textarea>
              <div class="questionBox_score">
                <input
                  type="text"
                  class="question_Score"
                  placeholder="00"
                  :value="judgment"
                  @input="checkInput($event, '5')"
                  ref="judgment"
                  min="1"
                  max="100"
                  maxlength="3"
                  :class="{ error: inputError.judgment }"
                />
              </div>
            </div>
          </div>
          <div class="scoreBoard_question">
            <p id="online_boldText">리더쉽/협동성</p>
            <div class="scoreBoard_questionBox">
              <textarea
                class="questionBox_content"
                placeholder="의견을 입력해주세요."
                v-model="leadership_opinion"
                ref="leadership_opinion"
                tyep="text"
              ></textarea>
              <div class="questionBox_score">
                <input
                  type="text"
                  class="question_Score"
                  placeholder="00"
                  :value="leadership"
                  @input="checkInput($event, '6')"
                  ref="leadership"
                  min="1"
                  max="100"
                  maxlength="3"
                  :class="{ error: inputError.leadership }"
                />
              </div>
            </div>
          </div>
          <div class="scoreBoard_question">
            <p id="online_boldText">기업 이해도</p>
            <div class="scoreBoard_questionBox">
              <textarea
                class="questionBox_content"
                placeholder="의견을 입력해주세요."
                v-model="business_opinion"
                ref="business_opinion"
                tyep="text"
              ></textarea>
              <div class="questionBox_score">
                <input
                  type="text"
                  class="question_Score"
                  placeholder="00"
                  :value="business"
                  @input="checkInput($event, '7')"
                  ref="business"
                  min="1"
                  max="100"
                  maxlength="3"
                  :class="{ error: inputError.business }"
                />
              </div>
            </div>
          </div>
          <div class="scoreBoard_question">
            <p id="online_boldText">비고</p>
            <textarea
              class="questionBox_addQuest"
              placeholder="추가로 남길 의견을 입력해주세요."
              v-model="opinion"
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
import QRCode from "qrcode";

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
      attitude: "",
      communication_skills: "",
      logical: "",
      reliability: "",
      judgment: "",
      leadership: "",
      business: "",
      opinion: "",
      attitude_opinion: "",
      communication_skills_opinion: "",
      logical_opinion: "",
      reliability_opinion: "",
      judgment_opinion: "",
      leadership_opinion: "",
      business_opinion: "",
      email: JSON.parse(localStorage.getItem("user")).email,
      role: JSON.parse(localStorage.getItem("user")).role,
      isEmpty: false,
      inputError: {
        attitude: false,
        communication_skills: false,
        logical: false,
        reliability: false,
        judgment: false,
        leadership: false,
        business: false,
      },
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
      applyResumeList: [],
      image: "",
      isQRcode: false,
      interviewId: null,
    };
  },
  async beforeRouteEnter(to, from, next) {
    console.log(from);
    const applicant = await axios.get(
      `/apply/applicant?interview_number=${to.params.roomName}`
    );
    next((vm) => {
      vm.applicant = applicant.data;
      vm.interviewId = from.params.interviewId;
    });
  },
  watch: {
    attitude() {
      if (this.attitude.trim() !== "") {
        this.inputError.attitude = false;
      }
    },
    communication_skills() {
      if (this.communication_skills.trim() !== "") {
        this.inputError.communication_skills = false;
      }
    },
    logical() {
      if (this.logical.trim() !== "") {
        this.inputError.logical = false;
      }
    },
    reliability() {
      if (this.reliability.trim() !== "") {
        this.inputError.reliability = false;
      }
    },
    judgment() {
      if (this.judgment.trim() !== "") {
        this.inputError.judgment = false;
      }
    },
    leadership() {
      if (this.leadership.trim() !== "") {
        this.inputError.leadership = false;
      }
    },
    business() {
      if (this.business.trim() !== "") {
        this.inputError.business = false;
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
        attitude: this.attitude,
        communication_skills: this.communication_skills,
        logical: this.logical,
        reliability: this.reliability,
        judgment: this.judgment,
        leadership: this.leadership,
        business: this.business,
        opinion: this.opinion,
        attitude_opinion: this.attitude_opinion,
        communication_skills_opinion: this.communication_skills_opinion,
        logical_opinion: this.logical_opinion,
        reliability_opinion: this.reliability_opinion,
        judgment_opinion: this.judgment_opinion,
        leadership_opinion: this.leadership_opinion,
        business_opinion: this.business_opinion,
        user_interview_number: this.$route.params.roomName,
        user_name: this.applicant.user_name,
        interviewer_name: JSON.parse(localStorage.getItem("user")).name,
        notice_title: this.applicant.notice_title,
      };
      const arrayValue = Object.values(data);
      focus: {
        for (let i in arrayValue) {
          if (arrayValue[i] === "") {
            this.isEmpty = true;
            switch (+i) {
              case 0:
                this.$refs.attitude.focus();
                this.inputError.attitude = true;
                break focus;
              case 1:
                this.$refs.communication_skills.focus();
                this.inputError.communication_skills = true;
                break focus;
              case 2:
                this.$refs.logical.focus();
                this.inputError.logical = true;
                break focus;
              case 3:
                this.$refs.reliability.focus();
                this.inputError.reliability = true;
                break focus;
              case 4:
                this.$refs.judgment.focus();
                this.inputError.judgment = true;
                break focus;
              case 5:
                this.$refs.leadership.focus();
                this.inputError.leadership = true;
                break focus;
              case 6:
                this.$refs.business.focus();
                this.inputError.business = true;
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

    userLeaveRoom() {
      this.socket.disconnect();
      this.myStream.getTracks().forEach((track) => track.stop());
      router.push("/mypage/interview");
    },

    checkInput(e, index) {
      switch (+index) {
        case 1:
          this.attitude = e.target.value.replace(/\D{0,3}$/g, "");
          e.target.value = this.attitude;
          break;
        case 2:
          this.communication_skills = e.target.value.replace(
            /\D[0,100]{0,3}$/g,
            ""
          );
          e.target.value = this.communication_skills;
          break;
        case 3:
          this.logical = e.target.value.replace(/\D[0,100]{0,3}$/g, "");
          e.target.value = this.logical;
          break;
        case 4:
          this.reliability = e.target.value.replace(/\D{0,3}$/g, "");
          e.target.value = this.reliability;
          break;
        case 5:
          this.judgment = e.target.value.replace(/\D[0,100]{0,3}$/g, "");
          e.target.value = this.judgment;
          break;
        case 6:
          this.leadership = e.target.value.replace(/\D[0,100]{0,3}$/g, "");
          e.target.value = this.leadership;
          break;
        case 7:
          this.business = e.target.value.replace(/\D[0,100]{0,3}$/g, "");
          e.target.value = this.business;
          break;
      }
    },

    qrcode() {
      this.isQRcode = !this.isQRcode;
    },
  },
  async created() {
    const applyResume = await this.$axios.get(
      `/apply/applicant?interview_number=${this.$route.params.roomName}`
    );
    this.applyResumeList = applyResume.data;
    QRCode.toDataURL(
      `https://interviewsystem.shop/qrcode/resume/${this.applyResumeList.resume_id}`,
      (err, src) => {
        this.image = src;
        // const blob = new Blob([src], { type: "image/png" });
        // this.imageURL = URL.createObjectURL(blob);
      }
    );
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
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
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
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
}

#onMain_leftArea {
  width: 100%;
}
.addForm {
  width: 63.5%;
}
</style>
