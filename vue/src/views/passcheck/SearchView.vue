<template>
  <div>
    <HeaderView />
    <main>
      <div class="success_container">
        <div class="success_navbar">
          <div class="success_nav__menu">
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
                <li class="active">
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
                  <p>면접 공지</p>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
        <section class="success">
          <article class="success__search">
            <div class="success__search-select">
              <h1>합격조회를 할 면접을 선택해주세요.</h1>
            </div>
            <hr />
            <div class="success__search-select-interview">
              <router-link
                :to="`/passcheck/result/${passcheck.id}`"
                :key="index"
                v-for="(passcheck, index) in passcheck"
              >
                <button>
                  <div class="success__search-select-interview-group-1">
                    <span>{{ passcheck.title }}</span>
                    <span>{{ passcheck.checkstatus }}</span>
                  </div>
                  <div class="success__search-select-interview-group-2">
                    <span>지원일 : {{ passcheck.applydate }}</span>
                  </div>
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
      passcheck: [],
    };
  },
  async created() {
    const passcheckText = await this.$axios.get(
      "https://96bf5df2-e991-4e90-a173-c13d159166cf.mock.pstmn.io/passcheck"
    );
    this.passcheck = passcheckText.data.passcheck;
    console.log(this.passcheck.id);
  },
};
</script>

<style>
.success_nav__menu img {
  margin: 0 auto;
}
</style>
