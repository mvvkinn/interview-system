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
          <article class="notice__details">
            <div class="notice__details-h1">
              <h1>{{ detail.title }}</h1>
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
                <p>{{ detail.date }}</p>
              </div>
              <hr />
              <div class="notice__details-header-div"><p>조회수</p></div>
              <hr />
              <div class="notice__details-header-div">
                <p>{{ detail.view }}</p>
              </div>
            </div>
            <hr />
            <div class="notice__details-text">
              <p>
                {{ detail.detail }}<br />
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
  data() {
    return {
      noticelist: [],
      detail: {},
    };
  },

  async created() {
    const noticeText = await this.$axios.get(
      "https://667e891c-ab9d-4b30-b8f7-37bd394933f3.mock.pstmn.io/noticeapi/list"
    );
    this.noticelist = noticeText.data.noticelist;
    // console.log(
    //   this.noticelist.filter((v) => v.number === +this.$route.params.number)
    // );
    this.detail = this.noticelist.filter(
      (v) => v.number === +this.$route.params.number
    )[0];
    console.log(this.detail[0]);
  },
};
</script>

<style></style>
