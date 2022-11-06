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
              <h1>지원한 면접 목록</h1>
              <div class="component__content--hr">
                <div class="component__list">
                  <div class="component__list-div">
                    <div class="component__list-column">
                      <div class="component__list-column--text">
                        <h1>2022년도 하반기 OOOOO 프론트엔드 개발자 모집</h1>
                        <p>지원일 : 2022/01/01</p>
                      </div>
                    </div>
                    <div class="component__list-column">
                      <div class="component__list-column--text">
                        <h1>면접 제목1</h1>
                        <p>지원일 : 2022/01/01</p>
                      </div>
                    </div>
                    <button>진행 중인 면접 보기</button>
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
};
</script>

<style></style>
