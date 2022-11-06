vu
<template>
  <div>
    <HeaderView />
    <main>
      <div class="adm_container">
        <div class="adm_navbar">
          <div class="adm_nav__menu">
            <ul>
              <li class="adm_nav__menu--li active">
                <img
                  src="@/assets/images/icons/menuIcon_user.png"
                  alt=""
                  class="component-column--img-black"
                />
                <img
                  src="@/assets/images/icons/menuIcon_user_hover.png"
                  alt=""
                  class="component-column--img-blue"
                  onclick="location.href='/src/views/adm_rsm/adm_rsm_1.html';"
                />
                <p>관리자 페이지</p>
              </li>
              <li class="adm_nav__menu--li">
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
                <p>합격자 조회</p>
              </li>
              <li class="adm_nav__menu--li">
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
            </ul>
          </div>
        </div>
        <section class="adm">
          <nav>
            <ul class="adm__menu">
              <li class="adm__menu-rsm">
                <a href="/src/views/adm_rsm/adm_rsm_1.html"
                  >지원자 및 이력서 조회</a
                >
              </li>
              <li class="adm__menu-id">
                <a href="/src/views/adm_id/adm_id_1.html">면접 내용 조회</a>
              </li>
              <li class="adm__menu-ci active">
                <a href="/src/views/adm_ci/adm_ci_1.html">면접 진행</a>
              </li>
              <li class="adm__menu-empty"></li>
              <li class="adm__menu-empty"></li>
              <li class="adm__menu-empty"></li>
            </ul>
          </nav>
          <article class="adm__rsm">
            <h1>면접 선택</h1>
            <div>
              <hr />
              <div class="adm__rsm-form">
                <p>목록을 불러올 면접을 선택하세요.</p>
                <select name="rsm" id="rsm-select">
                  <option value="">면접을 선택하세요</option>
                  <option value="a">a</option>
                  <option value="b">b</option>
                  <option value="c">c</option>
                  <option value="d">d</option>
                  <option value="e">e</option>
                  <option value="f">f</option>
                </select>
                <button
                  onclick="location.href='/src/views/adm_ci/adm_ci_2.html';"
                >
                  조회하기
                </button>
              </div>
              <hr />
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
