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
              <p ref="onlineTimer">{{ text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="onMain">
        <div id="onMain_leftArea">
          <div class="mainLeft_camArea">
            <div class="camArea_left"></div>
            <div class="camArea_right">
              <div class="camArea" id="myCam"></div>
              <div class="subCamArea">
                <div class="camArea" id="subCam"></div>
                <div class="camArea" id="subCam"></div>
              </div>
            </div>
          </div>
          <div class="mainLeft_btnArea">
            <div class="online_Btn" id="micBtn">
              <img
                src="../assets/images/icons/icon_mic_green.png"
                class="icon_mic_green"
              />
              MUTE
            </div>
            <div class="online_Btn" id="camBtn">
              <img
                src="../assets/images/icons/icon_cam_green.png"
                class="icon_cam_green"
              />
              SHOW VIDEO
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
        <div id="onMain_rightArea" @click.prevent="submitForm()">
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
                v-model="question_one"
                ref="question_one"
                tyep="text"
                :class="{ error: inputError.question_one }"
              ></textarea>
              <p class="error_txt">{{ inputErrorMsg }}</p>
              <div class="questionBox_score">
                <input
                  type="number"
                  class="question_Score"
                  placeholder="00"
                  v-model="score_one"
                  ref="score_one"
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
                  v-model="score_two"
                  ref="score_two"
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
                  v-model="score_three"
                  ref="score_three"
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
            ></textarea>
          </div>
          <div class="scoreBoard_btnArea">
            <div class="scoreBoard_btn" id="scoreBoard_whiteBtn">저장</div>
            <div class="scoreBoard_btn" id="scoreBoard_redBtn" type="submit">
              제출
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 600,
      min: 0,
      sec: 0,
      text: "",
      onlineTimer: 0,
      question_one: "",
      question_two: "",
      question_three: "",
      score_one: "",
      score_two: "",
      score_three: "",
      email: JSON.parse(localStorage.getItem("user")).email,
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
    };
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
  mounted() {
    setInterval(() => {
      this.count();
    }, 1000);
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
      this.text = `${this.min} : ${this.sec}`;
      this.time--;

      if (this.time < 0) {
        clearInterval();
      }
    },
    async submitForm() {
      const data = {
        question_one: this.question_one,
        score_one: this.score_one,
        question_two: this.question_two,
        score_two: this.score_two,
        question_three: this.question_three,
        score_three: this.score_three,
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
            }
          } else {
            this.isEmpty = false;
          }
        }
      }
      if (this.isEmpty === false) {
        await this.$axios
          .post("/score/test", JSON.stringify(data), {
            headers: { "Content-Type": "application/json" },
          })
          .then(() => {
            this.$router.push("/admin/progress");
            // this.$router.push("/admin/progress/list");
          });
      }
    },
  },
  destroyed() {
    this.count;
  },
  async created() {
    const scoreGet = await this.$axios.get("/score/read/1");
    console.log(scoreGet);
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

input.error {
  border: 2px solid red;
}

input.error:focus {
  border: 2px solid red;
}

input:focus {
  outline: none;
  border: 1px solid blue;
}

.scoreBoard_questionBox > .error + .error_txt {
  /* display: block;
  position: absolute;
  top: 50px; */
  color: red !important;
}
</style>
