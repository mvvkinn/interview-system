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
              <h1>{{ noticelist.title }}</h1>
            </div>
            <hr />
            <div class="notice__details-header">
              <div class="notice__details-header-div"><p>모집 기간</p></div>
              <hr />
              <div class="notice__details-header-div">
                <p>{{ recruitDate }}</p>
              </div>
              <div class="notice__details-header-div"><p>날짜</p></div>
              <hr />
              <div class="notice__details-header-div">
                <p>
                  {{ date }}
                </p>
              </div>
              <hr />
              <div class="notice__details-header-div"><p>조회수</p></div>
              <hr />
              <div class="notice__details-header-div">
                <p>156</p>
              </div>
            </div>
            <hr />
            <div class="notice__details-text">
              <p>{{ noticelist.content }}</p>
            </div>
            <div class="notice__details-text">
              <img v-bind:src="sliceImage" />
            </div>
            <div class="notice__details-button">
              <button id="notice_blueBtn" v-on:click.prevent="checkDate()">
                지원하기
              </button>
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
    };
  },
  async created() {
    const noticeGet = await this.$axios.get(
      `/notice/read/${this.$route.params.id}`
    );
    this.noticelist = noticeGet.data;
  },
  computed: {
    sliceImage() {
      return `/notice/${this.noticelist.image?.split("/")[2]}`;
    },
    date() {
      return this.noticelist.createdAt?.slice(0, 10).split("-").join("/");
    },
    recruitDate() {
      return `${this.noticelist.start_recruit
        ?.slice(0, 16)
        .split("-")
        .join("/")
        .split("T")
        .join(" ")} ~ ${this.noticelist.end_recruit
        ?.slice(0, 16)
        .split("-")
        .join("/")
        .split("T")
        .join(" ")}`;
    },
  },
  methods: {
    checkDate() {
      const today = new Date();
      const start = new Date(this.noticelist.start_recruit);
      const end = new Date(this.noticelist.end_recruit);

      if (start <= today && today <= end) {
        this.$router.push(`/notice/detail/${this.$route.params.id}/apply`);
      } else {
        alert("지원기간이 아닙니다");
      }
    },
  },
};
</script>

<style>
.notice__details-text {
  display: flex;
}

.notice__details-text p {
  height: 0;
}

.notice__details-text img {
  margin: 10px auto 0;
  width: 960px;
}
</style>
