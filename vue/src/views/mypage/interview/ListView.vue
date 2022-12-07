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
                    <router-link to="/meeting">
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
    };
  },
  async created() {
    const noticeText = await this.$axios.get(
      "https://c9be7795-dba6-43e3-b014-c14cda040542.mock.pstmn.io/api/notice"
    );
    this.noticelist = noticeText.data.noticelist;
    console.log(this.noticelist.length);
  },
};
</script>

<style></style>
