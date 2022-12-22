<template>
  <div>
    <HeaderView />
    <main>
      <div class="notice_container">
        <div class="notice_navbar">
          <div class="notice_nav__menu">
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
                  <p>합격자조회</p>
                </li>
              </router-link>
              <router-link to="/notice">
                <li class="active">
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
        <section class="notice">
          <article class="notice__apply">
            <div class="notice__apply-image">
              <img src="@/assets/images/logo1.png" />
            </div>
            <div class="notice__apply-title">
              <h1>면접지원 완료</h1>
            </div>
            <div class="notice__apply-subtitle">
              <p>면접 지원이 완료되었습니다.</p>
            </div>
            <div class="component__content-column-notice">
              <router-link to="/main">
                <button id="notice_blueBtn">홈으로</button>
              </router-link>
              <router-link to="/notice">
                <button id="notice_blackBtn">목록으로</button>
              </router-link>
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
};
</script>

<style></style>
