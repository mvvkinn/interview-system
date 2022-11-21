vu
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
                  마이페이지
                </li>
              </router-link>
              <router-link to="/success">
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
          </div>
        </div>
        <section class="interview">
          <article class="interview__result">
            <div class="interview__result-title">
              <h1>면접 결과</h1>
            </div>
            <hr />
            <div class="interview__result-content">
              <p>면접 조회 결과입니다.</p>
            </div>
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
              <button>
                <router-link to="/success">뒤로가기</router-link>
              </button>
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
      success: [],
      result: {},
    };
  },
  async created() {
    const successText = await this.$axios.get(
      "https://667e891c-ab9d-4b30-b8f7-37bd394933f3.mock.pstmn.io/noticeapi/success"
    );
    this.success = successText.data.success;
    this.result = this.success.filter(
      (v) => v.id === +this.$route.params.id
    )[0];
    console.log(this.result);
  },
};
</script>

<style></style>
