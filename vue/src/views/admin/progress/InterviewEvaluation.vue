<template>
  <body class="interview_body">
    <div class="interview_area">
      <form
        @submit.prevent="submitForm()"
        v-if="role!=='user'"
      >
        <div class="interview_title">면접진행</div>
        <div class="interview_subArea">
          <div class="interview_subObject">
            <div class="subObject_title" id="subObjectTitle_black">지원자</div>
            <div class="interview_content" id="interview_applicantName">
              {{ applicant.user_name }}
            </div>
          </div>
        </div>
        <div class="interview_format_line">
          <div class="fotmat_line_title">면접명</div>
          <div class="fotmat_line_value">
            <p>{{ applicant.notice_title }}</p>
          </div>
        </div>
        <div class="interview_format_line">
          <div class="fotmat_line_title">평가기준</div>
          <div class="fotmat_line_value">
            <p>
              프론트엔드 업무에 대한 전반적인 이해 및 업무능력 평가. 관련 자격 및
              업무 커뮤니케이션 능력 평가.
            </p>
          </div>
        </div>
        <div class="format_table_titleArea">
          <div class="interview_cell_title" id="cell_title">질문</div>
          <div class="interview_cell_title" id="cell_title_score">점수</div>
        </div>
        <div class="interview_format_table" id="interview_mainTable">
          <div class="table_format_line">
            <textarea
              class="interview_cell_value"
              id="cell_normal"
              placeholder="질문을 입력해주세요."
              v-model="question_one"
              ref="question_one"
              tyep="text"
              :class="{ error: inputError.question_one }"
            ></textarea>
            <p class="error_txt">{{ inputErrorMsg }}</p>
            <div class="interview_cell_value" id="cell_scoreArea">
              <input
                type="text"
                id="cell_scoreValue"
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
          <div class="table_format_line">
            <textarea
              class="interview_cell_value"
              id="cell_normal"
              placeholder="질문을 입력해주세요."
              v-model="question_two"
              ref="question_two"
              tyep="text"
              :class="{ error: inputError.question_two }"
            ></textarea>
            <p class="error_txt">{{ inputErrorMsg }}</p>
            <div class="interview_cell_value" id="cell_scoreArea">
              <input
                type="text"
                id="cell_scoreValue"
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
          <div class="table_format_line" id="table_line_bottom">
            <textarea
              class="interview_cell_value"
              id="cell_normal"
              placeholder="질문을 입력해주세요."
              v-model="question_three"
              ref="question_three"
              tyep="text"
              :class="{ error: inputError.question_three }"
            ></textarea>
            <p class="error_txt">{{ inputErrorMsg }}</p>
            <div class="interview_cell_value" id="cell_scoreArea">
              <input
                type="text"
                id="cell_scoreValue"
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
        <div class="format_table_titleArea">
          <div class="interview_cell_title">추가질문</div>
        </div>
        <div class="interview_format_table" id="interview_opinionTable">
          <textarea
            class="interview_cell_value"
            id="cell_opinion"
            placeholder="질문 내용을 입력해주세요."
            v-model="add_question"
          ></textarea>
        </div>
        <div class="inverview_btnArea">
          <button class="scoreBoard_btn" id="scoreBoard_redBtn" type="submit">
            제출
          </button>
        </div>
      </form>
      
    </div>
  </body>
</template>

<script>
import { initCall} from "@/plugins/stream";
import { store } from "@/store";
import axios from "axios";
import router from "@/router";

export default {
  data() {
    return {
      //  -- question, score --
      applicant:{},
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
      socket: null,
      roomName: this.$route.params.roomName,
      userName: JSON.parse(localStorage.getItem("user")).name,
      peerConnection:null,
    };
  },
  async beforeRouteEnter(to, from, next) {
    console.log(to);
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
  methods:{
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
        notice_title: this.applicant.notice_title,
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
#cell_normal {
  width: 95%;
}
#cell_title {
  width: 95%;
}
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

.table_format_line > .error + .error_txt {
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
