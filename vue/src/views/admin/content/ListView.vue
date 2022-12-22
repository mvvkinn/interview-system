<template>
  <div>
    <HeaderView />
    <main>
      <div class="adm_container">
        <div class="adm_navbar">
          <div class="adm_nav__menu">
            <ul>
              <router-link to="/admin/resume">
                <li class="adm_nav__menu--li active">
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
                <li class="adm_nav__menu--li">
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
        <section class="adm">
          <nav>
            <ul class="adm__menu">
              <li class="adm__menu-rsm">
                <router-link to="/admin/resume"
                  >지원자 및 이력서 조회</router-link
                >
              </li>
              <li class="adm__menu-id active">
                <router-link to="/admin/content">면접 내용 조회</router-link>
              </li>
              <li class="adm__menu-ci">
                <router-link to="/admin/progress">면접 진행</router-link>
              </li>
              <li></li>
            </ul>
          </nav>
          <article class="re-adm">
            <div class="re-adm__interview">
              <div class="re-adm__interview-title">
                <h1>
                  {{ noticeList.title }}
                </h1>
              </div>
              <hr />
              <div class="re-adm__interview-tab-header">
                <div class="re-adm__interview-content-tab-header-div">
                  <p>번호</p>
                </div>
                <hr />
                <div class="re-adm__interview-content-tab-header-div">
                  <p>이력서 제목</p>
                </div>
                <hr />
                <div class="re-adm__interview-content-tab-header-div">
                  <p>지원자</p>
                </div>
              </div>
              <div v-if="applyResumeList">
                <router-link
                  :to="`list/${applyList[index].interview_number}/detail`"
                  :key="index"
                  v-for="(resume, index) in applyResumeList"
                >
                  <div class="re-adm__interview-content-table-text">
                    <div class="re-adm__interview-content-table-text-no">
                      <p>{{ index + 1 + (pageNum * pageCount - pageCount) }}</p>
                    </div>
                    <div class="re-adm__interview-content-table-text-title">
                      <p>{{ resume.title }}</p>
                    </div>
                    <div class="re-adm__interview-content-table-text-volunteer">
                      <p>{{ resume.user_name }}</p>
                    </div>
                  </div>
                </router-link>
                <hr />
              </div>
              <div class="notice__interview-page">
                <div class="notice__interview-pagination">
                  <a>&laquo;</a>
                  <a
                    v-for="unit in page"
                    :key="`page-${unit}`"
                    @click="pagination(unit)"
                  >
                    {{ unit }}
                  </a>
                  <a>&raquo;</a>
                </div>
              </div>
              <div class="re-adm-content-btn">
                <router-link to="/admin/content">
                  <button>뒤로가기</button>
                </router-link>
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
      pageCount: 10,
      pageNum: 1,

      noticeList: {},
      applyList: [],
      applyResumeList: [],
    };
  },
  computed: {
    page() {
      return Math.ceil(this.applyResumeList.length / 10);
    },
  },
  async created() {
    const notice = await this.$axios.get(
      `/notice/read/${this.$route.params.interviewId}`
    );
    this.noticeList = notice.data;

    const applyResume = await this.$axios.get(
      `/apply/list?title=${this.noticeList.title}`
    );
    this.applyList = applyResume.data;

    this.applyList.filter(async (v) => {
      let resume = await this.$axios.get(`/resume?id=${v.resume_id}`);
      this.applyResumeList.push(resume.data[0]);
    });
    this.pagination(1);
  },
  methods: {
    pagination(num) {
      let start = 0;
      let end = this.pageCount;
      if (num === 1) {
        this.applyResumeList = this.applyResumeList.filter(
          (v, i) => i >= start && i < end
        );
        this.pageNum = num;
      } else {
        start = this.pageCount * (num - 1);
        end = this.pageCount * num;
        this.pageNum = num;
        this.applyResumeList = this.applyResumeList.filter(
          (v, i) => i >= start && i < end
        );
      }
    },
  },
};
</script>
<style scoped></style>
