vu
<template>
  <div>
    <HeaderView />
    <main>
      <section class="find component">
        <div class="component-column">
          <nav class="component-column--nav">
            <ul>
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
            </ul>
          </nav>
        </div>
        <div class="component-column">
          <nav>
            <ul class="component__menu">
              <li class="component__menu--li">내 이력서</li>
              <li class="component__menu--li active">내 면접</li>
              <li class="component__menu--li">개인정보 변경</li>
              <li></li>
            </ul>
          </nav>
          <article class="component__content">
            <div class="component__content-div">
              <h1>2022년도 하반기 OOOOO 프론트엔드 개발자 모집</h1>
              <div class="component__content--hr">
                <div class="component__content-info">
                  <div class="component__content-info--div">
                    <p>첨부파일</p>
                    <hr />
                    <p>첨부파일...hwp</p>
                  </div>
                  <div class="component__content-info--div">
                    <p>날짜</p>
                    <hr />
                    <p>2022/01/01</p>
                    <hr />
                    <p>조회수</p>
                    <hr />
                    <p>159</p>
                  </div>
                </div>
                <img src="https://via.placeholder.com/1200x2080" alt="" />
                <div class="component__content-info--button">
                  <button>목록</button>
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
};
</script>

<style></style>
