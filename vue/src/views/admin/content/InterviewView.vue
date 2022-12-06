<template>
  <body class="interview_body">
    <div class="interview_area">
      <div class="interview_title">면접진행</div>
      <div class="interview_subArea">
        <div class="interview_subObject">
          <div class="subObject_title" id="subObjectTitle_red">남은시간</div>
          <div class="interview_content" id="interview_timer"></div>
        </div>
        <div class="interview_subObject">
          <div class="subObject_title" id="subObjectTitle_black">지원자</div>
          <div class="interview_content" id="interview_applicantName">
            김명지
          </div>
        </div>
      </div>
      <div class="interview_format_line">
        <div class="fotmat_line_title">면접명</div>
        <div class="fotmat_line_value">
          <p>2022년도 하반기 OOOOO 프론트엔드 개발자 모집</p>
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
        <div class="interview_cell_title" id="cell_title">답변</div>
        <div class="interview_cell_title" id="cell_title_score">점수</div>
      </div>
      <div class="interview_format_table" id="interview_mainTable">
        <div class="table_format_line">
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            placeholder="질문을 입력해주세요."
          ></textarea>
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            placeholder="답변을 입력해주세요."
          ></textarea>
          <div class="interview_cell_value" id="cell_scoreArea">
            <input type="text" id="cell_scoreValue" placeholder="00" />
          </div>
        </div>
        <div class="table_format_line">
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            placeholder="질문을 입력해주세요."
          ></textarea>
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            placeholder="답변을 입력해주세요."
          ></textarea>
          <div class="interview_cell_value" id="cell_scoreArea">
            <input type="text" id="cell_scoreValue" placeholder="00" />
          </div>
        </div>
        <div class="table_format_line" id="table_line_bottom">
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            placeholder="질문을 입력해주세요."
          ></textarea>
          <textarea
            class="interview_cell_value"
            id="cell_normal"
            placeholder="답변을 입력해주세요."
          ></textarea>
          <div class="interview_cell_value" id="cell_scoreArea">
            <input type="text" id="cell_scoreValue" placeholder="00" />
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
          placeholder="기타의견을 입력해주세요."
        ></textarea>
      </div>
      <div class="inverview_btnArea">
        <div class="interview_btn" id="interview_blackBtn">저장</div>
        <div class="interview_btn" id="interview_blueBtn">제출</div>
      </div>
    </div>
  </body>
</template>

<script>
export default {

}
</script>

<style>

</style>