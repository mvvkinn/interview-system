<template>
  <body class="interview_body">
    <div class="interview_area">
      <div class="interview_title">이력서</div>
      <div class="import_resumeArea">
        <div class="resume_pictureArea">
          <img :src="updateImg" alt="" class="resume_picture" />
        </div>
        <div class="resume_tableArea">
          <p>인적사항</p>
          <div class="resumeTable_line">
            <div class="personalInfoTable_label" id="label_top">이름</div>
            <div class="personalInfoTable_value">
              {{ resumeList.user_name }}
            </div>
            <div class="personalInfoTable_label" id="label_top">생년월일</div>
            <div class="personalInfoTable_value">
              {{ resumeList.user_birthdate }}
            </div>
          </div>
          <div class="resumeTable_line">
            <div class="personalInfoTable_label">휴대폰</div>
            <div class="personalInfoTable_value">
              {{ resumeList.user_phone }}
            </div>
            <div class="personalInfoTable_label">E-mail</div>
            <div class="personalInfoTable_value">
              {{ resumeList.user_email }}
            </div>
          </div>
          <div class="resumeTable_line" id="tableLine_large">
            <div class="personalInfoTable_label">주소</div>
            <div class="personalInfoTable_value" id="label_address">
              {{ resumeList.user_address }}
            </div>
          </div>
        </div>
        <div class="resume_tableArea">
          <p>학력사항</p>
          <div class="resumeTable_line">
            <div class="normalTable_label" id="label_side">기간</div>
            <div class="normalTable_label" id="label_center">학교명</div>
            <div class="normalTable_label" id="label_side">전공</div>
          </div>
          <div
            class="resumeTable_line"
            v-for="(education, index) in resumeList.education"
            :key="index"
          >
            <div
              class="normalTabel_value"
              id="value_side"
              v-bind:class="education"
            >
              {{ education.period }}
            </div>
            <div
              class="normalTabel_value"
              id="value_center"
              v-bind:class="education"
            >
              {{ education.school }}
            </div>
            <div
              class="normalTabel_value"
              id="value_side"
              v-bind:class="education"
            >
              {{ education.major }}
            </div>
          </div>
        </div>
        <div class="resume_tableArea">
          <p>자격 및 교육사항</p>
          <div class="resumeTable_line">
            <div class="normalTable_label" id="label_side">취득일자</div>
            <div class="normalTable_label" id="label_leftCenter">
              자격/교육명
            </div>
            <div class="normalTable_label" id="label_rightCenter">등급</div>
            <div class="normalTable_label" id="label_side">발행기관</div>
          </div>
          <div
            class="resumeTable_line"
            v-for="(certificate, index) in resumeList.certificate"
            :key="index"
          >
            <div class="normalTabel_value" id="value_side">
              {{ certificate.acquisition_date }}
            </div>
            <div class="normalTabel_value" id="value_leftCenter">
              {{ certificate.certificate }}
            </div>
            <div class="normalTabel_value" id="value_rightCenter">
              {{ certificate.rating }}
            </div>
            <div class="normalTabel_value" id="value_side">
              {{ certificate.issuer }}
            </div>
          </div>
        </div>
        <div class="resume_tableArea">
          <p>대외활동</p>
          <div class="resumeTable_line">
            <div class="normalTable_label" id="label_side">기간</div>
            <div class="normalTable_label gubun" id="label_leftCenter">
              구분
            </div>
            <div class="normalTable_label" id="label_rightCenter">
              기관/장소
            </div>
            <div class="normalTable_label content" id="label_side">
              활동 내용
            </div>
          </div>
          <div
            class="resumeTable_line"
            v-for="(activity, index) in resumeList.activity"
            :key="index"
          >
            <div class="normalTabel_value" id="value_side">
              {{ activity.period }}
            </div>
            <div class="normalTabel_value gubun" id="value_leftCenter">
              {{ activity.gubun }}
            </div>
            <div class="normalTabel_value" id="value_rightCenter">
              {{ activity.location }}
            </div>
            <div class="normalTabel_value content" id="value_side">
              {{ activity.content }}
            </div>
          </div>
        </div>
        <!-- <div class="resume_tableArea">
          <p>자기소개서</p>
          <div class="resumeTable_line">
            <div class="normalTable_label resume" id="label_side">자유형식</div>
          </div>
          <div class="resumeTable_line_resume">
            <div class="normalTabel_value resume_textarea" id="value_side">
              {{ resumelist.cover_letter }}
            </div>
          </div>
        </div> -->
        <div class="notice_component_tableArea">
          <div class="notice_component_tableTitle">자기소개서</div>
          <div class="notice_componet_tableLine">
            <div class="tableComponent_titleBlack resume" id="titleBlack_side">
              자유형식
            </div>
          </div>
          <div class="notice_componet_tableLine_resume">
            <textarea
              class="resume_textarea"
              id="valueBlack_side"
              v-model="resumeList.cover_letter"
              placeholder="자유롭게 작성해주세요."
            ></textarea>
          </div>
        </div>
      </div>

      <div class="inverview_btnArea">
        <router-link :to="`/admin/content/${$route.params.interviewId}/list`">
          <div class="import_btn" id="btn_black">목록으로</div>
        </router-link>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      resumeList: {},
      noticeList: {},
    };
  },
  async created() {
    const resume = await this.$axios.get(
      `/resume?id=${this.$route.params.resumeId}`
    );
    this.resumeList = resume.data[0];

    const notice = await this.$axios.get(
      `/notice/read/${this.$route.params.interviewId}`
    );
    this.noticeList = notice.data;
  },
  computed: {
    updateImg() {
      return (
        // `/${this.resumelist.image?.split("\\")[1]}` ||
        `/${this.resumeList?.image?.split("/")[1]}`
      );
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
.resume {
  width: 100% !important;
}

.notice_componet_tableLine_resume {
  width: 100%;
  display: flex;
}

.resume_textarea {
  width: 100% !important;
  min-height: 400px;
  height: 100%;
  border: 1px solid #333;
  padding-left: 10px;
  font-family: noto sans kr;
  font-size: 14px;
  color: #333;
  font-weight: 300;
  resize: none;
  outline: none;
  line-height: 3.2vh;
}

.gubun {
  width: 15% !important;
}

.button-gubun {
  margin: 0 10px;
}

.content {
  width: 50% !important;
}

#addLine {
  border: none;
}
</style>
