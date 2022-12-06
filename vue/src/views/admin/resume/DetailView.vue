vu
<template>
  <div>
    <HeaderView />
    <main>
      <div class="adm_container">
        <div class="adm_navbar">
          <div class="adm_nav__menu">
            <ul>
              <router-link to="/admin/resume">
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
                  />
                  <p>관리자페이지</p>
                </li>
              </router-link>
              <router-link to="/passcheck">
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
                  <p>합격자조회</p>
                </li>
              </router-link>
              <router-link to="/admin/notice">
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
              </router-link>
            </ul>
          </div>
        </div>
        <section class="adm">
          <nav>
            <ul class="adm__menu">
              <li class="adm__menu-rsm active">
                <router-link to="/admin/resume"
                  >지원자 및 이력서 조회</router-link
                >
              </li>
              <li class="adm__menu-id">
                <router-link to="/admin/content">면접 내용 조회</router-link>
              </li>
              <li class="adm__menu-ci">
                <router-link to="/admin/progress">면접 진행</router-link>
              </li>
              <li></li>
            </ul>
          </nav>
          <article class="adm__rsm-content">
            <div class="adm__rsm-content-div">
              <h1>안녕하십니까 프론트엔드 지원지 김명지 입니다!</h1>
              <div class="adm__rsm-content--hr">
                <div class="adm__rsm-content-info">
                  <div class="adm__rsm-content-info--div-1">
                    <p>지원 면접</p>
                  </div>
                  <hr />
                  <div class="adm__rsm-content-info--div-2">
                    <p>2022년도 하반기 OOOOO 프론트엔드 개발자 모집</p>
                  </div>
                  <hr />
                  <div class="adm__rsm-content-info--div-3">
                    <p>지원자</p>
                  </div>
                  <hr />
                  <div class="adm__rsm-content-info--div-4">
                    <p>김명지</p>
                  </div>
                  <!-- <hr> -->
                </div>
              </div>
            </div>
            <div class="adm_contentArea">
              <img src="https://via.placeholder.com/297x358" alt="" />
              <div class="notice_component_tableArea">
                <div class="notice_component_tableTitle">인적사항</div>
                <div class="notice_componet_tableLine">
                  <div class="tableComponent_title">이름</div>
                  <div class="adm_tableComponent_value">-</div>
                  <div class="tableComponent_title">생년월일</div>
                  <div class="adm_tableComponent_value">-</div>
                </div>
                <div class="notice_componet_tableLine">
                  <div class="tableComponent_title">휴대폰</div>
                  <div class="adm_tableComponent_value">-</div>
                  <div class="tableComponent_title" id="emailTitle">E-mail</div>
                  <div class="adm_tableComponent_value">-</div>
                </div>
                <div class="notice_componet_tableLine" id="addressLine">
                  <div class="tableComponent_title" id="addressTitle">주소</div>
                  <div
                    class="adm_tableComponent_value"
                    id="adm_addressTextArea"
                  >
                    -
                  </div>
                </div>
              </div>
              <div class="notice_component_tableArea">
                <div class="notice_component_tableTitle">학력사항</div>
                <div class="notice_componet_tableLine">
                  <div class="tableComponent_titleBlack" id="titleBlack_side">
                    기간
                  </div>
                  <div class="tableComponent_titleBlack" id="titleBlack_center">
                    학교명
                  </div>
                  <div class="tableComponent_titleBlack" id="titleBlack_side">
                    전공
                  </div>
                </div>
                <div class="notice_componet_tableLine">
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    -
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_center"
                  >
                    -
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    -
                  </div>
                </div>
                <div class="notice_componet_tableLine">
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    -
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_center"
                  >
                    -
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    -
                  </div>
                </div>
                <div class="notice_componet_tableLine">
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    -
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_center"
                  >
                    -
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    -
                  </div>
                </div>
              </div>
              <div class="notice_component_tableArea">
                <div class="notice_component_tableTitle">자격 및 교육사항</div>
                <div class="notice_componet_tableLine">
                  <div class="tableComponent_titleBlack" id="titleBlack_side">
                    취득일자
                  </div>
                  <div
                    class="tableComponent_titleBlack"
                    id="titleBlack_classname"
                  >
                    자격 및 교육명
                  </div>
                  <div class="tableComponent_titleBlack" id="titleBlack_rating">
                    등급
                  </div>
                  <div class="tableComponent_titleBlack" id="titleBlack_side">
                    발행기관
                  </div>
                </div>
                <div class="notice_componet_tableLine">
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    -
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_classname"
                  >
                    -
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_rating"
                  >
                    -
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    -
                  </div>
                </div>
              </div>
              <div class="component__content-column-notice">
                <router-link to="/admin/resume/list">
                  <button id="notice_blackBtn">목록으로</button>
                </router-link>
              </div>
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
