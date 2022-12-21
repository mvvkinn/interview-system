<template>
  <body class="interview_body">
    <div class="interview_area">
      <div class="interview_title">면접진행</div>
      <div class="interview_subArea">
        <div class="interview_subObject">
          <div class="subObject_title" id="subObjectTitle_black">지원자</div>
          <div class="interview_content" id="interview_applicantName">
            <input
              class="interview_applicantName_value"
              :value="scoreList[scoreIndex]?.user_name"
              readonly
            />
          </div>
        </div>
        <div class="interview_subObject">
          <div class="subObject_title" id="subObjectTitle_black">면접관</div>
          <div class="interview_content" id="interview_applicantName">
            <input
              class="interview_applicantName_value"
              :value="scoreList[scoreIndex]?.interviewer_name"
              readonly
            />
          </div>
        </div>
      </div>
      <div class="interview_format_line">
        <div class="fotmat_line_title">면접명</div>
        <div class="fotmat_line_value">
          <input :value="scoreList[scoreIndex]?.notice_title" readonly />
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
        <div class="interview_cell_title" id="cell_title">평가 항목</div>
        <div class="interview_cell_title" id="cell_title_score">점수</div>
      </div>
      <div class="interview_format_table" id="interview_mainTable">
        <div class="table_format_line">
          <p id="cell_p">태도/인성</p>
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            :value="scoreList[scoreIndex]?.attitude_opinion"
            readonly
          ></textarea>
          <div class="interview_cell_value" id="cell_scoreArea">
            <input
              type="text"
              id="cell_scoreValue"
              placeholder="00"
              :value="scoreList[scoreIndex]?.attitude"
              readonly
            />
          </div>
        </div>
        <div class="table_format_line">
          <p id="cell_p">의사소통 능력</p>
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            :value="scoreList[scoreIndex]?.communication_skills_opinion"
            readonly
          ></textarea>
          <div class="interview_cell_value" id="cell_scoreArea">
            <input
              type="text"
              id="cell_scoreValue"
              placeholder="00"
              :value="scoreList[scoreIndex]?.communication_skills"
              readonly
            />
          </div>
        </div>
        <div class="table_format_line">
          <p id="cell_p">논리적 사고</p>
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            :value="scoreList[scoreIndex]?.logical_opinion"
            readonly
          ></textarea>
          <div class="interview_cell_value" id="cell_scoreArea">
            <input
              type="text"
              id="cell_scoreValue"
              placeholder="00"
              :value="scoreList[scoreIndex]?.logical"
              readonly
            />
          </div>
        </div>
        <div class="table_format_line">
          <p id="cell_p">적극성/신뢰성</p>
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            :value="scoreList[scoreIndex]?.reliability_opinion"
            readonly
          ></textarea>
          <div class="interview_cell_value" id="cell_scoreArea">
            <input
              type="text"
              id="cell_scoreValue"
              placeholder="00"
              :value="scoreList[scoreIndex]?.reliability"
              readonly
            />
          </div>
        </div>
        <div class="table_format_line">
          <p id="cell_p">창의력/판단력</p>
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            :value="scoreList[scoreIndex]?.judgment_opinion"
            readonly
          ></textarea>
          <div class="interview_cell_value" id="cell_scoreArea">
            <input
              type="text"
              id="cell_scoreValue"
              placeholder="00"
              :value="scoreList[scoreIndex]?.judgment"
              readonly
            />
          </div>
        </div>
        <div class="table_format_line">
          <p id="cell_p">리더쉽/협동성</p>
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            :value="scoreList[scoreIndex]?.leadership_opinion"
            readonly
          ></textarea>
          <div class="interview_cell_value" id="cell_scoreArea">
            <input
              type="text"
              id="cell_scoreValue"
              placeholder="00"
              :value="scoreList[scoreIndex]?.leadership"
              readonly
            />
          </div>
        </div>
        <div class="table_format_line" id="table_line_bottom">
          <p id="cell_p">기업 이해도</p>
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            :value="scoreList[scoreIndex]?.business_opinion"
            readonly
          ></textarea>
          <div class="interview_cell_value" id="cell_scoreArea">
            <input
              type="text"
              id="cell_scoreValue"
              placeholder="00"
              :value="scoreList[scoreIndex]?.business"
              readonly
            />
          </div>
        </div>
      </div>
      <div class="format_table_titleArea">
        <div class="interview_cell_title">기타의견</div>
      </div>
      <div class="interview_format_table" id="interview_opinionTable">
        <textarea
          class="interview_cell_value"
          id="cell_opinion"
          :value="scoreList[scoreIndex]?.opinion"
          readonly
        ></textarea>
      </div>
      <div class="inverview_btnArea">
        <div class="interview_btn">
          <button id="interview_blackBtn" @click="left">&laquo;</button>
          <button id="interview_blackBtn" @click="rigth">&raquo;</button>
        </div>
        <router-link :to="`/admin/content/${$route.params.interviewId}/list`">
          <div class="interview_btn" id="interview_blueBtn">나가기</div>
        </router-link>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // -- score --
      applicant: {},
      scoreGet: {},
      scoreList: {},
      scoreIndex: 0,
      id: "",
      email: "",
      name: "",
      notice_title: "",
      roomName: this.$route.params.roomName,
      interviewer_name: JSON.parse(localStorage.getItem("user")).name,
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
  async created() {
    this.scoreGet = await this.$axios.get(
      `/score/read?user_interview_number=${this.$route.params.roomName}`
    );
    this.scoreList = this.scoreGet.data;
    console.log(this.scoreList);
    console.log(this.scoreList[this.scoreIndex].user_name);
  },
  methods: {
    left() {
      if (this.scoreIndex === 0) {
        this.scoreIndex = 0;
      } else {
        this.scoreIndex--;
      }
    },
    rigth() {
      if (this.scoreIndex === this.scoreList.length - 1) {
        this.scoreIndex = this.scoreList.length - 1;
      } else {
        this.scoreIndex++;
      }
    },
  },
};
</script>

<style scoped>
#cell_normal {
  width: 70%;
}

#cell_p {
  width: 15%;
  border-right: 1px solid #9d9d9d;
  font-family: "noto sans kr";
  font-size: 14px;
  font-weight: 500;
  padding: 0.5vw;
}

#cell_title {
  width: 95%;
}
.interview_applicantName_value {
  border: none;

  background: none;
  text-align: center;
  overflow: hidden;
}
.fotmat_line_value input {
  border: none;
  overflow: hidden;
  width: inherit;
  color: #333;
  font-family: noto sans kr;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.3;
}

input {
  outline: none;
}
</style>
