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
        <section class="interview">
          <article class="interview__result">
            <div class="interview__result-title">
              <h1>면접 결과</h1>
            </div>
            <hr />
            <div class="interview__result-content">면접 조회 결과입니다.</div>
            <table class="interview__result-table">
              <thead>
                <tr class="interview__result-table_tb-th-ei">
                  <th class="interview__result-table_tb-th-001">지원 면접</th>
                  <th class="interview__result-table_tb-th-002">면접 결과</th>
                  <th class="interview__result-table_tb-th-003">지원일</th>
                  <th class="interview__result-table_tb-th-004">이름</th>
                </tr>
              </thead>
              <tbody>
                <tr class="interview__result-table_tb-td-ei">
                  <td class="interview__result-table_tb-td-001">
                    {{ result.title }}
                  </td>
                  <td class="interview__result-table_tb-td-002">
                    {{ result.result }}
                  </td>
                  <td class="interview__result-table_tb-td-003">
                    {{ result.applydate }}
                  </td>
                  <td class="interview__result-table_tb-td-004">
                    {{ result.name }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="interview__result-button">
              <router-link to="/passcheck">
                <button>뒤로가기</button>
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
      result: {},
    };
  },
  async created() {
    const passcheckText = await this.$axios.get(
      "https://96bf5df2-e991-4e90-a173-c13d159166cf.mock.pstmn.io/passcheck"
    );
    this.passcheck = passcheckText.data.passcheck;
    this.result = this.passcheck.filter(
      (v) => v.id === +this.$route.params.id
    )[0];
    console.log(this.result);
  },
};
</script>

<style>
.success_nav__menu img {
  margin: 0 auto;
}
</style>
