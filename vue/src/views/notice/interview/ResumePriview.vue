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
          <div class="personalInfoTable_value">{{ name }}</div>
          <div class="personalInfoTable_label" id="label_top">생년월일</div>
          <div class="personalInfoTable_value">{{ birth }}</div>
        </div>
        <div class="resumeTable_line">
          <div class="personalInfoTable_label">휴대폰</div>
          <div class="personalInfoTable_value">{{ phone }}</div>
          <div class="personalInfoTable_label">E-mail</div>
          <div class="personalInfoTable_value">{{ email }}</div>
        </div>
        <div class="resumeTable_line" id="tableLine_large">
          <div class="personalInfoTable_label">주소</div>
          <div class="personalInfoTable_value" id="label_address">
            {{ address }}
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
            {{ qualification.institution }}
          </div>
        </div>
      </div>
    </div>
    <div class="import_btnArea">
      <router-link :to="`/notice/detail/${$route.params.number}/modal`">
        <div class="import_btn" id="btn_black">목록으로</div>
      </router-link>
      <!-- <router-link
        :to="`/notice/detail/${$route.params.number}/apply?period=${education[0].period}&period1=${education[1].period}&schoolname=${education[0].schoolname}&schoolname1=${education[1].schoolname}&major=${education[0].major}&major1=${education[1].major}&date=${qualification[0].date}&date1=${qualification[1].date}&date2=${qualification[3].date}&education_name=${qualification[0].education_name}&education_name1=${qualification[1].education_name}&education_name2=${qualification[2].education_name}&class=${qualification[0].class}&class1=${qualification[1].class}&class2=${qualification[2].class}&institution=${qualification[0].institution}&institution1=${qualification[1].institution}&institution2=${qualification[2].institution}`"
      > -->
      <div class="import_btn" id="btn_blue" @click="setParentText">
        불러오기
      </div>
      <!-- </router-link> -->
    </div>
  </body>
</template>

<script>
// import { mapState } from "vuex";

export default {
  data() {
    return {
      noticelist: [],
      detail: {},
      resumelist: [],
      education: [],
      qualification: [],
      name: "",
      email: "",
      phone: "",
      address: "",
      birth: "",
    };
  },
  async created() {
    const resumeText = await this.$axios.get(
      "https://c9be7795-dba6-43e3-b014-c14cda040542.mock.pstmn.io/api/resume"
    );
    this.resumelist = resumeText.data;
    this.education = this.resumelist.education;
    console.log(resumeText);
    console.log(this.education[0].period);
    this.qualification = this.resumelist.qualification;
    this.name = JSON.parse(localStorage.getItem("user")).name;
    this.email = JSON.parse(localStorage.getItem("user")).email;
    this.phone = JSON.parse(localStorage.getItem("user")).phone;
    this.address = JSON.parse(localStorage.getItem("user")).address;
    this.birth = JSON.parse(localStorage.getItem("user"))
      .birthdate.slice(0, 10)
      .split("-")
      .join("");

    const noticeText = await this.$axios.get(
      "https://c9be7795-dba6-43e3-b014-c14cda040542.mock.pstmn.io/api/notice"
    );
    this.noticelist = noticeText.data.noticelist;
    this.detail = this.noticelist.filter(
      (v) => v.number === +this.$route.params.number
    )[0];
  },
  methods: {
    setParentText() {
      // window.opener.
    },
  },
  // methods: {
  //   jfAAAA() {
  //     console.log("education=>" + this.education[0].schoolname);
  //     console.log("qualification=>" + this.qualification);
  //     window.parent.listChange(this.education, this.qualification);
  //     // this.$emit(
  //     //   "listChange",
  //     //   this.education[0].schoolname,
  //     //   this.qualification
  //     // );
  //   },
  // },
  // computed: {
  //   ...mapState(["user"]),
  //   sliceBirthdate() {
  //     return this.user.birthdate.slice(0, 10).split("-").join("");
  //   },
  // },
};
</script>

<style></style>
