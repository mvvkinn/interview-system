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
              <!-- router link to = /success -->
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
              <h1>지원한 면접 목록</h1>
              <div class="component__content--hr">
                <div class="component__list" v-if="applyResumeList.length">
                  <div
                    class="component__list-div"
                    v-for="(apply, index) in applyResumeList"
                    :key="index"
                  >
                    <div class="component__list-column">
                      <div
                        class="component__list-column--text"
                        @click="applyInfo(apply.notice_title)"
                      >
                        <h1>
                          {{ apply.notice_title }}
                        </h1>
                        <p>지원일 : 2022/11/28</p>
                      </div>
                    </div>
                    <router-link :to="`/meeting/${apply.interview_number}`">
                      <button>화상 면접 참가</button>
                    </router-link>
                  </div>
                </div>
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
      email: JSON.parse(localStorage.getItem("user")).email,
      id: JSON.parse(localStorage.getItem("user")).id,
      applyResumeList: [],
    };
  },
  async created() {
    const applyResume = await this.$axios.get(
      `/apply/applicant?email=${this.email}`
    );
    this.applyResumeList = applyResume.data;
  },
  methods: {
    async applyInfo(notice_title) {
      const notice = await this.$axios.get(
        `/notice/find?title=${notice_title}`
      );
      this.$router.push(`/mypage/interview/detail/${notice.data.id}`);
    },
  },
};
</script>

<style scoped>
.component__list-div {
  flex-direction: row !important;
  justify-content: space-between;
}

.component__list-column {
  width: 80% !important;
}
</style>
