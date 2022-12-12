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
                <div class="component__list">
                  <div class="component__list-div" v-if="noticelist.length">
                    <router-link
                      :to="`/mypage/interview/detail/${noticelist[6].number}`"
                      class="component__list-column"
                    >
                      <div class="component__list-column--text">
                        <h1>
                          {{ noticelist[6].title }}
                          <p>화상면접 진행가능</p>
                        </h1>
                        <p>지원일 : 2022/11/28</p>
                      </div>
                    </router-link>
                    <router-link
                      :to="`/mypage/interview/detail/${noticelist[3].number}`"
                      class="component__list-column"
                    >
                      <div class="component__list-column--text">
                        <h1>
                          {{ noticelist[3].title }}
                        </h1>
                        <p>지원일 : 2022/12/8</p>
                      </div>
                    </router-link>
                    <router-link to="/meeting/2022811">
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
      noticelist: [],
      resumeList: [],
      interviewList: [],
      resume: {},
    };
  },
  async created() {
    const noticeText = await this.$axios.get(
      "https://96bf5df2-e991-4e90-a173-c13d159166cf.mock.pstmn.io/api/notice"
    );
    this.noticelist = noticeText.data.noticelist;

    const resumeText = await this.$axios.get(
      "https://80f083a6-6900-4471-abc4-2578a12a2af3.mock.pstmn.io/interview/resume"
    );
    this.resumeList = resumeText.data.resumelist;

    const interviewText = await this.$axios.get(
      "https://80f083a6-6900-4471-abc4-2578a12a2af3.mock.pstmn.io/interview"
    );
    this.interviewList = interviewText.data.interview;

    // this.resume = this.resumeList.filter((v) => v.number === index)[0];
  },
};
</script>

<style></style>
