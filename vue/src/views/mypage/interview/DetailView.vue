vu
<template>
  <div>
    <HeaderView />
    <main>
      <section class="find component">
        <div class="component-column">
          <nav class="component-column--nav">
            <ul>
              <router-link to="/mypage/resume">
                <li class="active">
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
                  합격자조회
                </li>
              </router-link>
              <router-link to="/notice">
                <li>
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
          </nav>
        </div>
        <div class="component-column">
          <nav>
            <ul class="component__menu">
              <li class="component__menu--li">
                <router-link to="/mypage/resume">내 이력서</router-link>
              </li>
              <li class="component__menu--li active">
                <router-link to="/mypage/interview">내 면접</router-link>
              </li>
              <li class="component__menu--li">
                <router-link to="/mypage/changeinfo">개인정보 변경</router-link>
              </li>
              <li></li>
            </ul>
          </nav>
          <article class="component__content">
            <div class="component__content-div">
              <h1>{{ noticelist.title }}</h1>
              <div class="component__content--hr">
                <div class="component__content-info">
                  <div class="component__content-info--div">
                    <p>첨부파일</p>
                    <hr />
                    <p>첨부파일...hwp</p>
                  </div>
                  <div class="component__content-info--div">
                    <p>날짜</p>
                    <hr />
                    <p>{{ date }}</p>
                    <hr />
                    <p>조회수</p>
                    <hr />
                    <p>156</p>
                  </div>
                </div>
                <img v-bind:src="sliceImage" alt="" />
                <router-link
                  class="component__content-info--button"
                  to="/mypage/interview"
                >
                  <button>목록</button>
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </section>
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
    };
  },
  async created() {
    const noticeGet = await this.$axios.get(
      `/notice/read/${this.$route.params.number}`
    );
    this.noticelist = noticeGet.data;
  },
  computed: {
    sliceImage() {
      return `/notice/${this.noticelist.image?.split("\\")[2]}`;
    },
    date() {
      return this.noticelist.createdAt?.slice(0, 10).split("-").join("/");
    },
  },
};
</script>

<style></style>
