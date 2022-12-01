vu
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
          <article class="notice__details">
            <div class="notice__details-h1">
              <h1>2022년도 하반기 OOOOO 프론트엔트 개발자 모집</h1>
            </div>
            <hr />
            <div class="notice__details-header">
              <div class="notice__details-header-div"><p>첨부파일</p></div>
              <hr />
              <div class="notice__details-header-div">
                <p>첨부파일...hwp</p>
              </div>
              <div class="notice__details-header-div"><p>날짜</p></div>
              <hr />
              <div class="notice__details-header-div">
                <p>2022 / 01 / 01</p>
              </div>
              <hr />
              <div class="notice__details-header-div"><p>조회수</p></div>
              <hr />
              <div class="notice__details-header-div"><p>159</p></div>
            </div>
            <hr />
            <div class="notice__details-text">
              <p>
                2022년도 하반기 OOOOO 프론트엔트 개발자를 모집합니다.<br />저희와
                함께 할 인재를 모집합니다. 많은 지원 부탁드립니다<br />지원방법<br />
                .<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />
                .<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />
                .<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />
              </p>
            </div>
            <div class="notice__details-button">
              <button>
                <router-link to="/notice/detail/apply">지원하기</router-link>
              </button>
              <button>
                <router-link to="/notice">목록</router-link>
              </button>
            </div>
            <hr />
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
};
</script>

<style></style>
