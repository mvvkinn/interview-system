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
              <img v-bind:src="detail.image" />
            </div>
            <div class="notice__details-button">
              <router-link :to="`/notice/detail/${$route.params.number}/apply`">
                <button id="notice_blueBtn">지원하기</button>
              </router-link>
              <router-link to="/notice">
                <button id="notice_blackBtn">목록</button>
              </router-link>
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
    const noticeText = await this.$axios.get("https://96bf5df2-e991-4e90-a173-c13d159166cf.mock.pstmn.io/api/notice");
    this.noticelist = noticeText.data.noticelist;
    this.detail = this.noticelist.filter(
      (v) => v.number === +this.$route.params.number
    )[0];
  },
};
</script>

<style>
.notice__details-text {
  display: flex;
}

.notice__details-text img {
  margin: 10px auto 0;
  width: 960px;
}
</style>
