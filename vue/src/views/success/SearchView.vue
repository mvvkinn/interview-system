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
        <section class="success">
          <article class="success__search">
            <div class="success__search-select">
              <h1>합격조회를 할 면접을 선택해주세요.</h1>
            </div>
            <hr />
            <div class="success__search-select-interview">
              <router-link to="/success/result">
                <button>
                  <div class="success__search-select-interview-group-1">
                    <span>2022 명지전문대 입시 면접</span>
                    <span>합격조회 가능</span>
                  </div>
                  <div class="success__search-select-interview-group-2">
                    <span>지원일 : 2022/01/01</span>
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
};
</script>

<style></style>
