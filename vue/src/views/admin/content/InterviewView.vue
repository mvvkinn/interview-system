<template>
  <body class="interview_body">
    <div class="interview_area">
      <div class="interview_title">면접진행</div>
      <div class="interview_subArea">
        <div class="interview_subObject">
          <div class="subObject_title" id="subObjectTitle_black">지원자</div>
          <div class="interview_content" id="interview_applicantName">
            {{ resumeDetail.person }}
          </div>
        </div>
      </div>
      <div class="interview_format_line">
        <div class="fotmat_line_title">면접명</div>
        <div class="fotmat_line_value">
          <p>{{ resumeDetail.interviewTitle }}</p>
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
            :value="scoreData.question_one"
            placeholder="질문을 입력해주세요."
          ></textarea>
          <div class="interview_cell_value" id="cell_scoreArea">
            <input
              type="text"
              id="cell_scoreValue"
              placeholder="00"
              :value="scoreData.score_one"
            />
          </div>
        </div>
        <div class="table_format_line">
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            :value="scoreData.question_two"
            placeholder="질문을 입력해주세요."
          ></textarea>
          <div class="interview_cell_value" id="cell_scoreArea">
            <input
              type="text"
              id="cell_scoreValue"
              placeholder="00"
              :value="scoreData.score_two"
            />
          </div>
        </div>
        <div class="table_format_line" id="table_line_bottom">
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            :value="scoreData.question_three"
            placeholder="질문을 입력해주세요."
          ></textarea>
          <div class="interview_cell_value" id="cell_scoreArea">
            <input
              type="text"
              id="cell_scoreValue"
              placeholder="00"
              :value="scoreData.score_three"
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
          :value="scoreData.add_question"
          placeholder="기타의견을 입력해주세요."
        ></textarea>
      </div>
      <div class="inverview_btnArea">
        <router-link :to="`/admin/content/${$route.params.interviewId}/list`">
          <div class="interview_btn" id="interview_blueBtn">나가기</div>
        </router-link>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      scoreGet: {},
      resumeList: [],
      resumeDetail: {},
      id: "",
      email: "",
      name: "",
      scoreData: {},
    };
  },
  async created() {
    this.id = JSON.parse(localStorage.getItem("user")).id;
    this.email = JSON.parse(localStorage.getItem("user")).email;
    this.name = JSON.parse(localStorage.getItem("user")).name;

    const resumeText = await this.$axios.get(
      "https://80f083a6-6900-4471-abc4-2578a12a2af3.mock.pstmn.io/interview/resume"
    );
    this.resumeList = resumeText.data.resumelist;

    this.resumeDetail = this.resumeList.filter(
      (v) => v.number === +this.$route.params.number
    )[0];

    this.scoreGet = await this.$axios.get(
      `/score/read/?id=${this.id}&email=${this.email}&name=${this.name}`
    );
    this.scoreData = this.scoreGet.data;
    console.log(this.scoreData);
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
</style>
