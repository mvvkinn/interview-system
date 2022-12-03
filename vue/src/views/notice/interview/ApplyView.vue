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
              <h1>면접 지원 - 2022년도 하반기 OOOOO 프론트엔트 개발자 모집</h1>
              <form class="notice_component__content--hr">
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
                  <router-link to="/notice/detail/apply/success">
                    <button id="notice_blueBtn" @click.prevent="applyForm">
                      지원하기
                    </button>
                  </router-link>
                  <router-link to="/notice/detail">
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
import SelectResume from "./SelectResume.vue";
import { store } from "@/store";
import { mapState } from "vuex";
export default {
  components: {
    HeaderView,
    FooterView,
    SelectResume,
  },
  data() {
    return {
      isClick: false,
      email: "",
      inputError: {
        email: false,
      },
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
      console.log(JSON.parse(localStorage.getItem("user")).email);
      console.log(JSON.parse(localStorage.getItem("user")).id);
      console.log(JSON.parse(localStorage.getItem("user")).name);
      store.dispatch("apply", { ...data }).then((res) => {
        console.log("success");
        console.log(this.data);
        if (res == 200) {
          this.inputError.email = false;
        }
      });
    },
  },
  computed: {
    ...mapState(["user"]),
    useremail() {
      return this.user.email;
    },
  },
};
</script>

<style></style>
