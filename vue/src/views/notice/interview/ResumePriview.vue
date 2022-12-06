<template>
  <body>
    <div class="import_titleArea">
      <p class="import_title">Title</p>
    </div>
    <div class="import_resumeArea">
      <div class="resume_pictureArea">
        <img v-bind:src="resumelist.image" alt="" class="resume_picture" />
      </div>
      <div class="resume_tableArea">
        <p>인적사항</p>
        <div class="resumeTable_line">
          <div class="personalInfoTable_label" id="label_top">이름</div>
          <div class="personalInfoTable_value">-</div>
          <div class="personalInfoTable_label" id="label_top">생년월일</div>
          <div class="personalInfoTable_value">-</div>
        </div>
        <div class="resumeTable_line">
          <div class="personalInfoTable_label">휴대폰</div>
          <div class="personalInfoTable_value">-</div>
          <div class="personalInfoTable_label">E-mail</div>
          <div class="personalInfoTable_value">-</div>
        </div>
        <div class="resumeTable_line" id="tableLine_large">
          <div class="personalInfoTable_label">주소</div>
          <div class="personalInfoTable_value" id="label_address">-</div>
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
          :key="index"
          v-for="(education, index) in education"
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
            {{ education.schoolname }}
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
          <div class="normalTable_label" id="label_leftCenter">자격/교육명</div>
          <div class="normalTable_label" id="label_rightCenter">등급</div>
          <div class="normalTable_label" id="label_side">발행기관</div>
        </div>
        <div
          class="resumeTable_line"
          :key="index"
          v-for="(qualification, index) in qualification"
        >
          <div class="normalTabel_value" id="value_side">
            {{ qualification.date }}
          </div>
          <div class="normalTabel_value" id="value_leftCenter">
            {{ qualification.education_name }}
          </div>
          <div class="normalTabel_value" id="value_rightCenter">
            {{ qualification.class }}
          </div>
          <div class="normalTabel_value" id="value_side">
            {{ qualification.institutaion }}
          </div>
        </div>
      </div>
    </div>
    <div class="import_btnArea">
      <router-link :to="`/notice/detail/${$route.params.number}/modal`">
        <div class="import_btn" id="btn_black">목록으로</div>
      </router-link>
      <div class="import_btn" id="btn_blue">불러오기</div>
    </div>
  </body>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      resumelist: [],
      education: [],
      qualification: [],
      detail: {},
    };
  },
  async created() {
    const resumeText = await this.$axios.get(
      "https://c9be7795-dba6-43e3-b014-c14cda040542.mock.pstmn.io/api/resume"
    );
    this.resumelist = resumeText.data;
    this.education = this.resumelist.education;
    this.qualification = this.resumelist.qualification;
    console.log();
  },
  computed: {
    ...mapState(["user"]),
    sliceBirthdate() {
      return this.user.birthdate.slice(0, 10).split("-").join("");
    },
  },
};
</script>

<style></style>
