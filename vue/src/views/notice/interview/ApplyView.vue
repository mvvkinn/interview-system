<template>
  <div>
    <HeaderView />
    <!-- <SelectResume :active="isClick" @close="close" /> -->
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
                    <img v-bind:src="resumelist.image" alt="" />
                    <!-- <img src="https://via.placeholder.com/297x358" alt="" /> -->
                    <!-- <button>이미지 업로드</button> -->
                  </div>
                </div>
                <div class="notice_component_tableArea">
                  <div class="notice_component_tableTitle">인적사항</div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_title">이름</div>
                    <textarea
                      class="tableComponent_value"
                      placeholder="이름을 입력해주세요."
                      v-bind:value="user.name"
                    ></textarea>
                    <div class="tableComponent_title">생년월일</div>
                    <textarea
                      class="tableComponent_value"
                      placeholder="생년 6자리를 입력해주세요."
                      v-bind:value="sliceBirthdate"
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_title">휴대폰</div>
                    <textarea
                      class="tableComponent_value"
                      placeholder="'-'제외하고 입력"
                      v-bind:value="user.phone"
                    ></textarea>
                    <div class="tableComponent_title" id="emailTitle">
                      E-mail
                    </div>
                    <textarea
                      class="tableComponent_value"
                      placeholder="이메일을 입력해주세요."
                      v-bind:value="user.email"
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
                      v-bind:value="user.address"
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
                  <button id="notice_blueBtn" @click.prevent="applyForm">
                    지원하기
                  </button>
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
import { store } from "@/store";
// import SelectResume from "./SelectResume.vue";
export default {
  components: {
    HeaderView,
    FooterView,
    // SelectResume,
  },
  data() {
    return {
      isClick: false,
      noticelist: [],
      resumelist: {},
      detail: {},
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
    async applyForm() {
      const data = {
        email: JSON.parse(localStorage.getItem("user")).email,
        id: JSON.parse(localStorage.getItem("user")).id,
        name: JSON.parse(localStorage.getItem("user")).name,
      };

      store.dispatch("apply", { ...data }).then((res) => {
        console.log("success");
        console.log(this.data);
        if (res == 201) {
          this.inputError.email = false;
        } else {
          alert("이미 지원하였습니다");
        }
      });
    },
  },

  async created() {
    const noticeText = await this.$axios.get(
      "https://c9be7795-dba6-43e3-b014-c14cda040542.mock.pstmn.io/api/notice"
    );
    this.noticelist = noticeText.data.noticelist;
    this.detail = this.noticelist.filter(
      (v) => v.number === +this.$route.params.number
    )[0];

    const resumeText = await this.$axios.get(
      "https://c9be7795-dba6-43e3-b014-c14cda040542.mock.pstmn.io/api/resume"
    );
    this.resumelist = resumeText.data;
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
