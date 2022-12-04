<template>
  <div>
    <HeaderView />
    <SelectResume :active="isClick" @close="close" />
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
              <h1>{{ detail.title }}</h1>
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
                    <img src="https://via.placeholder.com/297x358" alt="" />
                    <button>이미지 업로드</button>
                  </div>
                </div>
                <div class="notice_component_tableArea">
                  <div class="notice_component_tableTitle">인적사항</div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_title">이름</div>
                    <textarea
                      class="tableComponent_value"
                      placeholder="이름을 입력해주세요."
                    ></textarea>
                    <div class="tableComponent_title">생년월일</div>
                    <textarea
                      class="tableComponent_value"
                      placeholder="생년 6자리를 입력해주세요."
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_title">휴대폰</div>
                    <textarea
                      class="tableComponent_value"
                      placeholder="'-'제외하고 입력"
                    ></textarea>
                    <div class="tableComponent_title" id="emailTitle">
                      E-mail
                    </div>
                    <textarea
                      class="tableComponent_value"
                      placeholder="이메일을 입력해주세요."
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine" id="addressLine">
                    <div class="tableComponent_title" id="addressTitle">
                      주소
                    </div>
                    <textarea
                      class="tableComponent_value"
                      placeholder="'-'제외하고 입력"
                      id="addressTextArea"
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
                  <div class="notice_componet_tableLine">
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="예)220101 ~ 220101"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_center"
                      placeholder="학교명을 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="전공을 입력해주세요."
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine">
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="예)220101 ~ 220101"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_center"
                      placeholder="학교명을 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="전공을 입력해주세요."
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine">
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="예)220101 ~ 220101"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_center"
                      placeholder="학교명을 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="전공을 입력해주세요."
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
                  <div class="notice_componet_tableLine">
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="예)220101"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_classname"
                      placeholder="자격 및 교육명을 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_rating"
                      placeholder="등급을 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="발행기관을 입력해주세요."
                    ></textarea>
                  </div>
                </div>
                <div class="component__content-column-notice">
                  <router-link
                    :to="`/notice/detail/${$route.params.number}/apply/success`"
                  >
                    <button id="notice_blueBtn">지원하기</button>
                  </router-link>
                  <router-link :to="`/notice/detail/${$route.params.number}`">
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
import { mapState } from "vuex";
import SelectResume from "./SelectResume.vue";
export default {
  components: {
    HeaderView,
    FooterView,
    SelectResume,
  },
  data() {
    return {
      isClick: false,
    };
  },
  methods: {
    selectResume() {
      this.isClick = true;
      window.open(
        "modal",
        "blank",
        "width=800, height=650, location=no, status=no, scrollbars=yes"
      );
    },
    close() {
      window.close();
    },
  },
  // data() {
  //   return {
  //     noticelist: [],
  //     detail: {},
  //     resumelist: {},
  //     education: [],
  //     qualification: [],
  //     // isClick: false,
  //   };
  // },

  async created() {
    const noticeText = await this.$axios.get(
      "https://667e891c-ab9d-4b30-b8f7-37bd394933f3.mock.pstmn.io/api/notice"
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
