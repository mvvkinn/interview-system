<template>
  <div>
    <HeaderView />
    <main>
      <div class="notice_adm_container">
        <div class="notice_adm_navbar">
          <div class="notice_adm_nav__menu">
            <ul>
              <router-link to="/admin/resume">
                <li class="adm_nav__menu--li">
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
              <router-link to="/admin/notice">
                <li class="adm_nav__menu--li active">
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
        <section class="notice-adm">
          <article class="notice-adm__interview">
            <div class="notice-adm__interview-title">
              <h1>면접 공지사항</h1>
              <router-link to="/admin/notice/write">
                <button>글쓰기</button>
              </router-link>
            </div>
            <hr />
            <div class="notice-adm__interview-tab-header">
              <div class="notice-adm__interview-tab-header-div">
                <p>번호</p>
              </div>
              <hr />
              <div class="notice-adm__interview-tab-header-div">
                <p>제목</p>
              </div>
              <hr />
              <div class="notice-adm__interview-tab-header-div">
                <p>날짜</p>
              </div>
              <hr />
              <div class="notice-adm__interview-tab-header-div">
                <p>조회수</p>
              </div>
            </div>

            <div class="notice-adm__interview-table-notice">
              <div class="notice-adm__interview-table-notice-no">
                <p>공지</p>
              </div>
              <div class="notice-adm__interview-table-notice-title">
                <p>면접 지원 안내 및 주의사항</p>
              </div>
              <div class="notice-adm__interview-table-notice-date">
                <p>2022/01/01</p>
              </div>
              <div class="notice-adm__interview-table-notice-views">
                <p>1596</p>
              </div>
            </div>
            <div v-if="splitlist">
              <router-link
                :to="`/admin/notice/detail/${notice.id}`"
                :key="index"
                v-for="(notice, index) in splitlist"
              >
                <!-- :to="`/admin/notice/detail/${notice.id}`" -->
                <div class="notice-adm__interview-table-text">
                  <div class="notice-adm__interview-table-text-no">
                    <p>{{ notice.id }}</p>
                  </div>
                  <div class="notice-adm__interview-table-text-title">
                    <p>{{ notice.title }}</p>
                  </div>
                  <div class="notice-adm__interview-table-text-date">
                    <p>
                      {{ notice.createdAt.slice(0, 10).split("-").join("/") }}
                    </p>
                  </div>
                  <div class="notice-adm__interview-table-text-views">
                    <p>156</p>
                  </div>
                </div>
              </router-link>
            </div>

            <div class="notice__interview-page">
              <div class="notice__interview-pagination">
                <a href="#">&laquo;</a>
                <a
                  v-for="unit in page"
                  :key="`page-${unit}`"
                  @click="pagination(unit)"
                  >{{ unit }}</a
                >
                <a href="#">&raquo;</a>
              </div>
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
export default {
  components: {
    HeaderView,
    FooterView,
  },
  data() {
    return {
      splitlist: [],
      pagecount: 10,
      noticeData: [],
    };
  },
  computed: {
    page() {
      return Math.ceil(this.noticeData.length / 10);
    },
  },
  async created() {
    this.noticeGet = await this.$axios.get("/notice/read");
    this.noticeData = this.noticeGet.data;
    this.pagination(1);
  },
  methods: {
    pagination(num) {
      let start = 0;
      let end = this.pagecount;
      if (num === 1) {
        this.splitlist = this.noticeData.filter(
          (v, i) => i >= start && i < end
        );
      } else {
        start = this.pagecount * (num - 1);
        end = this.pagecount * num;
        this.splitlist = this.noticeData.filter(
          (v, i) => i >= start && i < end
        );
      }
    },
  },
};
</script>

<style></style>
