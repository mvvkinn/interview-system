<template>
  <div>
    <HeaderView />
    <main>
      <div class="adm_container">
        <div class="adm_navbar">
          <div class="adm_nav__menu">
            <ul>
              <router-link to="/admin/resume">
                <li class="adm_nav__menu--li active">
                  <img
                    src="@/assets/images/icons/menuIcon_user.png"
                    alt=""
                    class="component-column--img-black"
                  />
                  <img
                    src="@/assets/images/icons/menuIcon_user_hover.png"
                    alt=""
                    class="component-column--img-blue"
                  />
                  <p>면접관페이지</p>
                </li>
              </router-link>
              <router-link to="/admin/notice">
                <li class="adm_nav__menu--li">
                  <img
                    src="@/assets/images/icons/menuIcon_notice.png"
                    alt=""
                    class="component-column--img-black"
                  />
                  <img
                    src="@/assets/images/icons/menuIcon_notice_hover.png"
                    alt=""
                    class="component-column--img-blue"
                  />
                  <p>면접 공지</p>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
        <section class="adm">
          <nav>
            <ul class="adm__menu">
              <li class="adm__menu-rsm active">
                <router-link to="/admin/resume"
                  >지원자 및 이력서 조회</router-link
                >
              </li>
              <li class="adm__menu-id">
                <router-link to="/admin/content">면접 내용 조회</router-link>
              </li>
              <li class="adm__menu-ci">
                <router-link to="/admin/progress">면접 진행</router-link>
              </li>
              <li></li>
            </ul>
          </nav>
          <article class="adm__rsm-content">
            <div class="adm__rsm-content-div">
              <h1>
                {{ resumeList.title }}
              </h1>
              <div class="adm__rsm-content--hr">
                <div class="adm__rsm-content-info">
                  <div class="adm__rsm-content-info--div-1">
                    <p>지원 면접</p>
                  </div>
                  <hr />
                  <div class="adm__rsm-content-info--div-2">
                    <p>{{ noticeList.title }}</p>
                  </div>
                  <hr />
                  <div class="adm__rsm-content-info--div-3">
                    <p>지원자</p>
                  </div>
                  <hr />
                  <div class="adm__rsm-content-info--div-4">
                    <p>{{ resumeList.user_name }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="adm_contentArea">
              <img v-bind:src="updateImg" alt="" />
              <div class="notice_component_tableArea">
                <div class="notice_component_tableTitle">인적사항</div>
                <div class="notice_componet_tableLine">
                  <div class="tableComponent_title">이름</div>
                  <div class="adm_tableComponent_value">
                    {{ resumeList.user_name }}
                  </div>
                  <div class="tableComponent_title">생년월일</div>
                  <div class="adm_tableComponent_value">
                    {{ resumeList.user_birthdate }}
                  </div>
                </div>
                <div class="notice_componet_tableLine">
                  <div class="tableComponent_title">휴대폰</div>
                  <div class="adm_tableComponent_value">
                    {{ resumeList.user_phone }}
                  </div>
                  <div class="tableComponent_title" id="emailTitle">E-mail</div>
                  <div class="adm_tableComponent_value">
                    {{ resumeList.user_email }}
                  </div>
                </div>
                <div class="notice_componet_tableLine" id="addressLine">
                  <div class="tableComponent_title" id="addressTitle">주소</div>
                  <div
                    class="adm_tableComponent_value"
                    id="adm_addressTextArea"
                  >
                    {{ resumeList.user_address }}
                  </div>
                </div>
              </div>
              <div class="notice_component_tableArea">
                <div class="notice_component_tableTitle">학력사항</div>
                <div class="notice_componet_tableLine">
                  <div class="tableComponent_titleBlack" id="titleBlack_side">
                    기간
                  </div>
                  <div class="tableComponent_titleBlack" id="titleBlack_center">
                    학교명
                  </div>
                  <div class="tableComponent_titleBlack" id="titleBlack_side">
                    전공
                  </div>
                </div>
                <div
                  class="notice_componet_tableLine"
                  v-for="(education, index) in resumeList.education"
                  :key="index"
                >
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    {{ education.period }}
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_center"
                  >
                    {{ education.school }}
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    {{ education.major }}
                  </div>
                </div>
              </div>
              <div class="notice_component_tableArea">
                <div class="notice_component_tableTitle">자격 및 교육사항</div>
                <div class="notice_componet_tableLine">
                  <div class="tableComponent_titleBlack" id="titleBlack_side">
                    취득일자
                  </div>
                  <div
                    class="tableComponent_titleBlack"
                    id="titleBlack_classname"
                  >
                    자격 및 교육명
                  </div>
                  <div class="tableComponent_titleBlack" id="titleBlack_rating">
                    등급
                  </div>
                  <div class="tableComponent_titleBlack" id="titleBlack_side">
                    발행기관
                  </div>
                </div>
                <div
                  class="notice_componet_tableLine"
                  v-for="(certificate, index) in resumeList.certificate"
                  :key="index"
                >
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    {{ certificate.acquisition_date }}
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_classname"
                  >
                    {{ certificate.certificate }}
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_rating"
                  >
                    {{ certificate.rating }}
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    {{ certificate.issuer }}
                  </div>
                </div>
              </div>
              <div class="notice_component_tableArea">
                <div class="notice_component_tableTitle">대외활동</div>
                <div class="notice_componet_tableLine">
                  <div class="tableComponent_titleBlack" id="titleBlack_side">
                    기간
                  </div>
                  <div
                    class="tableComponent_titleBlack gubun"
                    id="titleBlack_classname"
                  >
                    구분
                  </div>
                  <div class="tableComponent_titleBlack" id="titleBlack_rating">
                    기관/장소
                  </div>
                  <div
                    class="tableComponent_titleBlack content"
                    id="titleBlack_side"
                  >
                    활동 내용
                  </div>
                </div>
                <div
                  class="notice_componet_tableLine"
                  v-for="(activity, index) in resumeList.activity"
                  :key="index"
                >
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    {{ activity.period }}
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack gubun"
                    id="adm_valueBlack_classname"
                  >
                    {{ activity.gubun }}
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_rating"
                  >
                    {{ activity.location }}
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack content"
                    id="adm_valueBlack_side"
                  >
                    {{ activity.content }}
                  </div>
                </div>
              </div>
              <div class="notice_component_tableArea">
                <div class="notice_component_tableTitle">자기소개서</div>
                <div class="notice_componet_tableLine">
                  <div
                    class="tableComponent_titleBlack resume"
                    id="titleBlack_side"
                  >
                    자유형식
                  </div>
                </div>
                <div class="notice_componet_tableLine_resume">
                  <div
                    class="adm_tableComponent_valueBlack resume_textarea"
                    id="adm_valueBlack_side"
                  >
                    {{ resumeList.cover_letter }}
                  </div>
                </div>
              </div>
              <div class="component__content-column-notice">
                <router-link
                  :to="`/admin/resume/${this.$route.params.interviewId}/list`"
                >
                  <button id="notice_blackBtn">목록으로</button>
                </router-link>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: {
    HeaderView,
    FooterView,
  },
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
        // `/${this.resumeList.image?.split("\\")[1]}` ||
        `/${this.resumeList.image?.split("/")[1]}`
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
.notice_componet_tableLine_resume {
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
