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
                  마이페이지
                </li>
              </router-link>
              <router-link to="/success">
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
                  합격자조회
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
                  면접 공지
                </li>
              </router-link>
            </ul>
          </div>
        </div>
        <section class="notice">
          <article class="notice_component__content-notice">
            <div class="notice_component__content-div">
              <h1>{{ detail.title }}</h1>
              <form
                class="notice_component__content--hr"
                v-on:submit.prevent="clickbutton"
              >
                <div class="notice_component__content-column">
                  <div class="notice-button">
                    <button type="submit">내정보 불러오기</button>
                  </div>
                  <div class="notice_component__content-column--img">
                    <img src="https://via.placeholder.com/297x358" alt="" />
                    <button>이미지 업로드</button>
                  </div>
                </div>
                <div class="notice_component__content-column">
                  <h2>인적사항</h2>
                  <div class="notice_component__table">
                    <div class="notice_component__table-column">
                      <label for="name">이름</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="이름을 입력해주세요."
                        v-bind:value="user.name"
                      />
                      <label for="birth">생년월일</label>
                      <input
                        id="birth"
                        type="text"
                        placeholder="8자리 입력"
                        v-bind:value="sliceBirthdate"
                      />
                    </div>
                    <div class="notice_component__table-column">
                      <label for="phone">휴대폰</label>
                      <input
                        id="phone"
                        type="text"
                        placeholder="'-'없이 입력"
                        v-bind:value="user.phone"
                      />
                      <label for="email">E-mail</label>
                      <input
                        id="email"
                        type="textarea"
                        placeholder="example@example.com"
                        v-bind:value="user.email"
                      />
                    </div>
                    <div class="notice_component__table-column">
                      <label for="adress">주소</label>
                      <input
                        id="adress"
                        type="text"
                        placeholder="주소를 입력해주세요."
                        v-bind:value="user.address"
                      />
                    </div>
                  </div>
                </div>
                <div class="notice_component__content-column">
                  <h2>학력사항</h2>
                  <div class="notice_component__table">
                    <div class="notice_component__table-column">
                      <label for="period">기간</label>
                      <input
                        v-if="!isClick"
                        id="period"
                        type="text"
                        placeholder="00/00/00 - 00/00/00"
                      />
                      <input
                        :key="index"
                        v-for="(education, index) in education"
                        id="period"
                        type="text"
                        placeholder="00/00/00 - 00/00/00"
                        v-bind:value="education.period"
                      />
                    </div>
                    <div class="notice_component__table-column">
                      <label for="school">학교명</label>
                      <input
                        v-if="!isClick"
                        id="school"
                        type="text"
                        placeholder="학교명을 입력해주세요."
                      />
                      <input
                        :key="index"
                        v-for="(education, index) in education"
                        id="school"
                        type="text"
                        placeholder="학교명을 입력해주세요."
                        v-bind:value="education.schoolname"
                      />
                    </div>
                    <div class="notice_component__table-column">
                      <label for="major">전공</label>
                      <input
                        v-if="!isClick"
                        id="major"
                        type="text"
                        placeholder="전공을 입력해주세요."
                      />
                      <input
                        :key="index"
                        v-for="(education, index) in education"
                        id="major"
                        type="text"
                        placeholder="전공을 입력해주세요."
                        v-bind:value="education.major"
                      />
                    </div>
                  </div>
                </div>
                <div class="notice_component__content-column">
                  <h2>자격 및 교육 사항</h2>
                  <div class="notice_component__table">
                    <div class="notice_component__table-column">
                      <label for="achive">취득일자</label>
                      <input
                        v-if="!isClick"
                        id="achive"
                        type="text"
                        placeholder="0000/00/00"
                      />
                      <input
                        :key="index"
                        v-for="(qualification, index) in qualification"
                        id="achive"
                        type="text"
                        placeholder="0000/00/00"
                        v-bind:value="qualification.date"
                      />
                    </div>
                    <div class="notice_component__table-column">
                      <label for="quality">자격 및 교육명</label>
                      <input
                        v-if="!isClick"
                        id="quality"
                        type="text"
                        placeholder="자격 및 교육명을 입력해주세요."
                      />
                      <input
                        :key="index"
                        v-for="(qualification, index) in qualification"
                        id="quality"
                        type="text"
                        placeholder="자격 및 교육명을 입력해주세요."
                        v-bind:value="qualification.education_name"
                      />
                    </div>
                    <div class="notice_component__table-column">
                      <label for="rating">등급</label>
                      <input
                        v-if="!isClick"
                        id="rating"
                        type="text"
                        placeholder="등급을 입력해주세요."
                      />
                      <input
                        :key="index"
                        v-for="(qualification, index) in qualification"
                        id="rating"
                        type="text"
                        placeholder="등급을 입력해주세요."
                        v-bind:value="qualification.class"
                      />
                    </div>
                    <div class="notice_component__table-column">
                      <label for="issuer">발행기관</label>
                      <input
                        v-if="!isClick"
                        id="issuer"
                        type="text"
                        placeholder="발행기관을 입력해주세요."
                      />
                      <input
                        :key="index"
                        v-for="(qualification, index) in qualification"
                        id="issuer"
                        type="text"
                        placeholder="발행기관을 입력해주세요."
                        v-bind:value="qualification.institution"
                      />
                    </div>
                  </div>
                </div>
                <div class="component__content-column-notice">
                  <div class="component__content-column--button-notice">
                    <button>
                      <router-link
                        :to="`/notice/detail/${$route.params.number}/apply/success`"
                        >지원하기</router-link
                      >
                    </button>
                    <button>
                      <router-link
                        :to="`/notice/detail/${$route.params.number}`"
                        >취소하기</router-link
                      >
                    </button>
                  </div>
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
import { mapState } from "vuex";
export default {
  components: {
    HeaderView,
    FooterView,
  },
  data() {
    return {
      noticelist: [],
      detail: {},
      resumelist: {},
      education: [],
      qualification: [],
      isClick: false,
    };
  },

  async created() {
    const noticeText = await this.$axios.get(
      "https://667e891c-ab9d-4b30-b8f7-37bd394933f3.mock.pstmn.io/noticeapi/list"
    );
    this.noticelist = noticeText.data.noticelist;
    console.log(
      this.noticelist.filter((v) => v.number === +this.$route.params.number)
    );
    this.detail = this.noticelist.filter(
      (v) => v.number === +this.$route.params.number
    )[0];

    // const resumeText = await this.$axios.get(
    //   "https://667e891c-ab9d-4b30-b8f7-37bd394933f3.mock.pstmn.io/noticeapi/resume"
    // );
    // this.resumelist = resumeText.data;
    // this.education = this.resumelist.education;
    // this.qualification = this.resumelist.qualification;
    // console.log(this.qualification);
  },
  methods: {
    async clickbutton() {
      const resumeText = await this.$axios.get(
        "https://667e891c-ab9d-4b30-b8f7-37bd394933f3.mock.pstmn.io/noticeapi/resume"
      );
      this.resumelist = resumeText.data;
      this.education = this.resumelist.education;
      this.qualification = this.resumelist.qualification;
      console.log(this.resumelist);
      this.isClick = true;
    },
  },
  computed: {
    ...mapState(["user"]),
    sliceBirthdate() {
      return this.user.birthdate.slice(0, 10).split("-").join("");
    },
  },
};
</script>

<style>
.notice_component__content-column:nth-child(3) input,
.notice_component__content-column:nth-child(4) input {
  text-align: center;
}
</style>
