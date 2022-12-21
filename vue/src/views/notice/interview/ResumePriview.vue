<template>
  <body>
    <div class="import_titleArea">
      <p class="import_title">{{ resumelist.title }}</p>
    </div>
    <div class="import_resumeArea">
      <div class="resume_pictureArea">
        <img :src="updateImg" alt="" class="resume_picture" />
      </div>
      <div class="resume_tableArea">
        <p>인적사항</p>
        <div class="resumeTable_line">
          <div class="personalInfoTable_label" id="label_top">이름</div>
          <div class="personalInfoTable_value">{{ resumelist.user_name }}</div>
          <div class="personalInfoTable_label" id="label_top">생년월일</div>
          <div class="personalInfoTable_value">
            {{ resumelist.user_birthdate }}
          </div>
        </div>
        <div class="resumeTable_line">
          <div class="personalInfoTable_label">휴대폰</div>
          <div class="personalInfoTable_value">{{ resumelist.user_phone }}</div>
          <div class="personalInfoTable_label">E-mail</div>
          <div class="personalInfoTable_value">{{ resumelist.user_email }}</div>
        </div>
        <div class="resumeTable_line" id="tableLine_large">
          <div class="personalInfoTable_label">주소</div>
          <div class="personalInfoTable_value" id="label_address">
            {{ resumelist.user_address }}
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
        <div class="resumeTable_line" v-for="index in eduNumber" :key="index">
          <div
            class="normalTabel_value"
            id="value_side"
            v-bind:class="education"
          >
            {{ resumelist.education[index - 1].period }}
          </div>
          <div
            class="normalTabel_value"
            id="value_center"
            v-bind:class="education"
          >
            {{ resumelist.education[index - 1].school }}
          </div>
          <div
            class="normalTabel_value"
            id="value_side"
            v-bind:class="education"
          >
            {{ resumelist.education[index - 1].major }}
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
          v-for="index in certificaNumber"
          :key="index"
        >
          <div class="normalTabel_value" id="value_side">
            {{ resumelist.certificate[index - 1].acquisition_date }}
          </div>
          <div class="normalTabel_value" id="value_leftCenter">
            {{ resumelist.certificate[index - 1].certificate }}
          </div>
          <div class="normalTabel_value" id="value_rightCenter">
            {{ resumelist.certificate[index - 1].rating }}
          </div>
          <div class="normalTabel_value" id="value_side">
            {{ resumelist.certificate[index - 1].issuer }}
          </div>
        </div>
      </div>
      <div class="resume_tableArea">
        <p>대외활동</p>
        <div class="resumeTable_line">
          <div class="normalTable_label" id="label_side">기간</div>
          <div class="normalTable_label gubun" id="label_leftCenter">구분</div>
          <div class="normalTable_label" id="label_rightCenter">기관/장소</div>
          <div class="normalTable_label content" id="label_side">활동 내용</div>
        </div>
        <div
          class="resumeTable_line"
          v-for="index in activityNumber"
          :key="index"
        >
          <div class="normalTabel_value" id="value_side">
            {{ resumelist.activity[index - 1].period }}
          </div>
          <div class="normalTabel_value gubun" id="value_leftCenter">
            {{ resumelist.activity[index - 1].gubun }}
          </div>
          <div class="normalTabel_value" id="value_rightCenter">
            {{ resumelist.activity[index - 1].location }}
          </div>
          <div class="normalTabel_value content" id="value_side">
            {{ resumelist.activity[index - 1].content }}
          </div>
        </div>
      </div>
      <div class="resume_tableArea">
        <p>자기소개서</p>
        <div class="resumeTable_line">
          <div class="normalTable_label resume" id="label_side">자유형식</div>
        </div>
        <div class="resumeTable_line_resume">
          <div class="normalTabel_value resume_textarea" id="value_side">
            {{ resumelist.cover_letter }}
          </div>
        </div>
      </div>
    </div>
    <div class="import_btnArea">
      <router-link :to="`/notice/detail/${$route.params.id}/modal`">
        <div class="import_btn" id="btn_black">목록으로</div>
      </router-link>
      <div
        class="import_btn"
        id="btn_blue"
        @click.prevent="callUp(resumelist.id)"
      >
        불러오기
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      resumelist: {},
      eduNumber: 1,
      certificaNumber: 1,
      activityNumber: 1,
    };
  },
  async created() {
    const resume = await this.$axios.get(`/resume?id=${this.$route.params.id}`);
    this.resumelist = resume.data[0];
    this.eduNumber =
      this.resumelist.education.length === 0
        ? 1
        : this.resumelist.education.length;
    this.certificaNumber =
      this.resumelist.certificate.length === 0
        ? 1
        : this.resumelist.certificate.length;
    this.activityNumber =
      this.resumelist.activity.length === 0
        ? 1
        : this.resumelist.activity.length;
  },
  methods: {
    callUp(id) {
      localStorage.setItem("resumeId", id);
      window.close();
    },
  },
  computed: {
    updateImg() {
      return (
        // `/${this.resumelist.image?.split("\\")[1]}` ||
        `/${this.resumelist.image?.split("/")[1]}`
      );
    },
  },
};
</script>

<style scoped>
.gubun {
  width: 20% !important;
}

.content {
  width: 45% !important;
}

.resume {
  width: 100% !important;
}
.resumeTable_line_resume {
  width: 100%;
  height: 100%;
  display: flex;
}
.resume_textarea {
  width: 100% !important;
  min-height: 400px;
  height: 100%;
  display: block !important;
  padding: 5px;
}
</style>
