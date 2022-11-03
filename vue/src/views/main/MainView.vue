<template>
  <div>
    <HeaderView />
    <main>
      <section class="main-view">
        <div class="main-view__column">
          <div class="main-view__column-content">
            <img
              src="/src/public/assets/images/icons/icon_notice.png"
              alt=""
              width="125"
              height="125"
            />
            <div class="main-view__column-content-text">
              <h1>공지사항</h1>
              <h2>NOTICE</h2>
              <div class="main-view__column-content-tag">
                <span>#오늘의 공지</span>
                <span>#필수확인</span>
                <span>#대학공지</span>
              </div>
            </div>
          </div>
          <div class="main-view__column-out-1"></div>
          <div class="main-view__column-in-1"></div>
          <div class="main-view__column-out-2"></div>
          <div class="main-view__column-in-2"></div>
          <div class="main-view__column-left-corner-1"></div>
          <div class="main-view__column-left-corner-2"></div>
          <div class="main-view__column-right-corner-1"></div>
          <div class="main-view__column-right-corner-2"></div>
          <div class="main-view__column-left-box"></div>
          <div class="main-view__column-right-box"></div>
        </div>
        <div class="main-view__column">
          <div class="main-view__column-content">
            <img
              src="/src/public/assets/images/icons/icon_mypage.png"
              alt=""
              width="125"
              height="125"
            />
            <div class="main-view__column-content-text">
              <h1>마이페이지</h1>
              <h2>MY PAGE</h2>
              <div class="main-view__column-content-tag">
                <span>#내_이력서</span>
                <span>#내_면접</span>
                <span>#개인정보_변경</span>
              </div>
            </div>
          </div>
          <div class="main-view__column-out-1"></div>
          <div class="main-view__column-in-1"></div>
          <div class="main-view__column-out-2"></div>
          <div class="main-view__column-in-2"></div>
          <div class="main-view__column-left-corner-1"></div>
          <div class="main-view__column-left-corner-2"></div>
          <div class="main-view__column-right-corner-1"></div>
          <div class="main-view__column-right-corner-2"></div>
          <div class="main-view__column-left-box"></div>
          <div class="main-view__column-right-box"></div>
        </div>
        <div class="main-view__column">
          <div class="main-view__column-content">
            <img
              src="/src/public/assets/images/icons/icon_lookup.png"
              alt=""
              width="125"
              height="125"
            />
            <div class="main-view__column-content-text">
              <h1>합격자조회</h1>
              <h2>LOOK UP</h2>
              <div class="main-view__column-content-tag">
                <span>#면접결과</span>
                <span>#두근두근</span>
                <span>#후회는_없다</span>
              </div>
            </div>
          </div>
          <div class="main-view__column-out-1"></div>
          <div class="main-view__column-in-1"></div>
          <div class="main-view__column-out-2"></div>
          <div class="main-view__column-in-2"></div>
          <div class="main-view__column-left-corner-1"></div>
          <div class="main-view__column-left-corner-2"></div>
          <div class="main-view__column-right-corner-1"></div>
          <div class="main-view__column-right-corner-2"></div>
          <div class="main-view__column-left-box"></div>
          <div class="main-view__column-right-box"></div>
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
};
</script>

<style></style>
