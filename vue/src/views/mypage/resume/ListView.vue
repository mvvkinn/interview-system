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
              <li class="component__menu--li active">
                <router-link to="/mypage/resume">내 이력서</router-link>
              </li>
              <li class="component__menu--li">
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
              <h1>이력서 목록</h1>
              <div class="component__content--hr">
                <div class="component__list">
                  <div class="component__list-div" v-if="resumeList.length">
                    <div
                      class="component__list-column"
                      v-for="(resume, index) in resumeList"
                      :key="index"
                    >
                      <router-link :to="`/mypage/resume/detail/${resume.id}`">
                        <div class="component__list-column--text">
                          <h1>{{ resume.title }}</h1>
                          <p>
                            작성일 :
                            {{
                              resume.createdAt
                                .toString()
                                .slice(0, 10)
                                .split("-")
                                .join("/")
                            }}
                          </p>
                        </div>
                      </router-link>
                    </div>
                    <router-link to="/mypage/resume/detail">
                      <button>이력서 등록</button>
                    </router-link>
                  </div>
                  <div class="component__list-div" v-else>
                    <router-link to="/mypage/resume/detail">
                      <button>이력서 등록</button>
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
      user_email: JSON.parse(localStorage.getItem("user")).email,
      resumeList: [],
    };
  },
  async created() {
    const resume = await this.$axios.get(`/resume?email=${this.user_email}`);
    this.resumeList = resume.data;
  },
};
</script>

<style></style>
