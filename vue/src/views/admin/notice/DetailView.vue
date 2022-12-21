<template>
  <div>
    <HeaderView />
    <main>
      <div class="notice_container">
        <div class="notice_navbar">
          <div class="notice_nav__menu">
            <ul>
              <router-link to="/admin/resume">
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
                  <p>면접관페이지</p>
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
                  <p>면접공지</p>
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
              <router-link :to="`/admin/notice/detail/${noticelist.id}/amend`">
                <button class="notice_detailBtn" id="detailBtn_blue">
                  수정하기
                </button>
              </router-link>
              <router-link to="/admin/notice">
                <button class="notice_detailBtn" id="detailBtn_black">
                  목록
                </button>
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
};
</script>

<style>
.notice_detailBtn {
  width: 200px;
  height: 50px;
}

#detailBtn_blue {
  border: 1px solid #3c62e5;
  color: #3c62e5;
  margin-right: 20px;
}

#detailBtn_blue:hover {
  background-color: #3c62e5;
  color: white;
}

#detailBtn_black {
  border: 1px solid #333333;
  color: #333333;
}

#detailBtn_black:hover {
  background-color: #333333;
  color: white;
}
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
