<template>
  <div>
    <HeaderView />
    <main>
      <div class="notice_container">
        <div class="notice_navbar">
          <div class="notice_nav__menu">
            <ul>
              <router-link to="/mypage/resume">
                <li>
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
                  <p>마이페이지</p>
                </li>
              </router-link>
              <router-link to="/passcheck">
                <li>
                  <img
                    src="@/assets/images/icons/menuIcon_search.png"
                    alt=""
                    class="component-column--img-black"
                  />
                  <img
                    src="@/assets/images/icons/menuIcon_search_hover.png"
                    alt=""
                    class="component-column--img-blue"
                  />
                  <p>합격자조회</p>
                </li>
              </router-link>
              <router-link to="/notice">
                <li class="active">
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
        <section class="notice">
          <article class="notice_component__content-notice">
            <div class="notice_component__content-div">
              <h1>{{ noticelist.title }}</h1>
              <form
                class="notice_component__content--hr"
                v-on:submit.prevent="clickbutton"
              >
                <div class="notice_component__content-column">
                  <div class="notice-button">
                    <button @click.prevent="selectResume">
                      내 이력서 불러오기
                    </button>
                  </div>
                  <div class="notice_component__content-column--img">
                    <img :src="resumeImg" alt="" />
                  </div>
                </div>
                <div class="notice_component_tableArea">
                  <div class="notice_component_tableTitle">인적사항</div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_title">이름</div>
                    <textarea
                      class="tableComponent_value"
                      readonly
                      v-bind:value="resumeList?.user_name"
                    ></textarea>
                    <div class="tableComponent_title">생년월일</div>
                    <textarea
                      class="tableComponent_value"
                      readonly
                      v-bind:value="resumeList?.user_birthdate"
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_title">휴대폰</div>
                    <textarea
                      class="tableComponent_value"
                      readonly
                      v-bind:value="resumeList?.user_phone"
                    ></textarea>
                    <div class="tableComponent_title" id="emailTitle">
                      E-mail
                    </div>
                    <textarea
                      class="tableComponent_value"
                      readonly
                      v-bind:value="resumeList?.user_email"
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine" id="addressLine">
                    <div class="tableComponent_title" id="addressTitle">
                      주소
                    </div>
                    <textarea
                      class="tableComponent_value"
                      id="addressTextArea"
                      readonly
                      v-bind:value="resumeList?.user_address"
                    ></textarea>
                  </div>
                </div>
                <div class="notice_component_tableArea">
                  <div class="notice_component_tableTitle">학력사항</div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_titleBlack" id="titleBlack_side">
                      기간
                    </div>
                    <div
                      class="tableComponent_titleBlack"
                      id="titleBlack_center"
                    >
                      학교명
                    </div>
                    <div class="tableComponent_titleBlack" id="titleBlack_side">
                      전공
                    </div>
                  </div>
                  <div
                    class="notice_componet_tableLine"
                    v-for="index in eduNumber"
                    :key="index"
                  >
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      readonly
                      v-bind:value="resumeList?.education[index - 1].period"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_center"
                      readonly
                      v-bind:value="resumeList?.education[index - 1].school"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      readonly
                      v-bind:value="resumeList?.education[index - 1].major"
                    ></textarea>
                  </div>
                </div>
                <div class="notice_component_tableArea">
                  <div class="notice_component_tableTitle">
                    자격 및 교육사항
                  </div>
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
                    <div
                      class="tableComponent_titleBlack"
                      id="titleBlack_rating"
                    >
                      등급
                    </div>
                    <div class="tableComponent_titleBlack" id="titleBlack_side">
                      발행기관
                    </div>
                  </div>
                  <div
                    class="notice_componet_tableLine"
                    v-for="index in certificaNumber"
                    :key="index"
                  >
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      readonly
                      v-bind:value="
                        resumeList?.certificate[index - 1].acquisition_date
                      "
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_classname"
                      readonly
                      v-bind:value="
                        resumeList?.certificate[index - 1].certificate
                      "
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_rating"
                      readonly
                      v-bind:value="resumeList?.certificate[index - 1].rating"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      readonly
                      v-bind:value="resumeList?.certificate[index - 1].issuer"
                    ></textarea>
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
                    <div
                      class="tableComponent_titleBlack"
                      id="titleBlack_rating"
                    >
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
                    v-for="index in activityNumber"
                    :key="index"
                  >
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      readonly
                      v-bind:value="resumeList?.activity[index - 1].period"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack gubun"
                      id="valueBlack_classname"
                      readonly
                      v-bind:value="resumeList?.activity[index - 1].gubun"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_rating"
                      readonly
                      v-bind:value="resumeList?.activity[index - 1].location"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack content"
                      id="valueBlack_side"
                      readonly
                      v-bind:value="resumeList?.activity[index - 1].content"
                    ></textarea>
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
                    <textarea
                      class="resume_textarea"
                      id="valueBlack_side"
                      readonly
                      v-bind:value="resumeList.cover_letter"
                    ></textarea>
                  </div>
                </div>
                <div class="component__content-column-notice">
                  <button id="notice_blueBtn" @click.prevent="applyForm">
                    지원하기
                  </button>
                  <router-link :to="`/notice/detail/${$route.params.id}`">
                    <button id="notice_blackBtn">취소하기</button>
                  </router-link>
                </div>
              </form>
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

import { store } from "@/store";
export default {
  components: {
    HeaderView,
    FooterView,
  },
  data() {
    return {
      resumeList: {
        user_name: "",
        user_birthdate: "",
        user_phone: "",
        user_address: "",
        user_email: "",
        image: "",
        education: [
          {
            period: "",
            school: "",
            major: "",
          },
        ],
        certificate: [
          {
            acquisition_date: "",
            certificate: "",
            rating: "",
            issuer: "",
          },
        ],
        activity: [
          {
            period: "",
            gubun: "",
            location: "",
            content: "",
          },
        ],
        cover_letter: "",
      },
      eduNumber: 1,
      certificaNumber: 1,
      activityNumber: 1,
      popup: null,
      noticelist: [],
      resumeId: null,
      isResume: null,
    };
  },
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem("resumeId");
    localStorage.removeItem("isResume");
    next();
  },
  methods: {
    selectResume() {
      this.popup = window.open(
        "modal",
        "blank",
        "width=800, height=650, location=no, status=no, scrollbars=yes"
      );
      this.popup.onbeforeunload = async () => {
        this.resumeId = JSON.parse(localStorage.getItem("resumeId"));
        this.isResume = JSON.parse(localStorage.getItem("isResume"));
        if (this.resumeId) {
          const resume = await this.$axios.get(`/resume?id=${this.resumeId}`);
          this.resumeList = resume.data[0];
          this.eduNumber =
            this.resumeList.education.length === 0
              ? 1
              : this.resumeList.education.length;
          this.certificaNumber =
            this.resumeList.certificate.length === 0
              ? 1
              : this.resumeList.certificate.length;
          this.activityNumber =
            this.resumeList.activity.length === 0
              ? 1
              : this.resumeList.activity.length;
        } else if (!this.isResume) {
          this.$router.push("/mypage/resume/list");
        }
      };
    },
    async applyForm() {
      const data = {
        user_email: JSON.parse(localStorage.getItem("user")).email,
        resume_id: this.resumeId,
        notice_id: this.$route.params.id,
      };
      store
        .dispatch("apply", { ...data })
        .then((res) => {
          if (res === 201) {
            this.$router.push("/notice/apply/success");
          } else if (res === 500) {
            this.resumeList?.user_name === ""
              ? alert("이력서를 작성해주세요.")
              : alert("이미 지원하였습니다.");
          }
        })
        .catch((e) => console.log(e));
    },
  },
  computed: {
    resumeImg() {
      return this.resumeList.image === ""
        ? "https://via.placeholder.com/297x358"
        : // `/${this.resumeList.image?.split("\\")[1]}` ||
          `/${this.resumeList.image?.split("/")[1]}`;
    },
  },
  async created() {
    const noticeGet = await this.$axios.get(
      `/notice/read/${this.$route.params.id}`
    );
    this.noticelist = noticeGet.data;
  },
};
</script>

<style scoped>
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

.content {
  width: 50% !important;
}
</style>
