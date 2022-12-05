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
                  <p>관리자 페이지</p>
                </li>
              </router-link>
              <router-link to="/success">
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
              <li class="adm__menu-rsm">
                <router-link to="/admin/resume"
                  >지원자 및 이력서 조회</router-link
                >
              </li>
              <li class="adm__menu-id active">
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
                </div>
              </div>
              <div class="adm_interviewResultArea">
                <div class="interviewResult_titleArea">
                  <div class="interviewResult_title"><p>면접명</p></div>
                  <div class="interviewResult_value">
                    <p id="interviewResult_valueText">
                      2022년도 하반기 OOOOO 프론트엔드 개발자 모집
                    </p>
                  </div>
                </div>
                <div class="interviewResult_titleArea">
                  <div class="interviewResult_title"><p>평가기준</p></div>
                  <div class="interviewResult_value">
                    <p id="interviewResult_valueText">
                      프론트엔드 업무에 대한 전반적인 이해 및 업무능력 평가.
                      관련 자격 및 업무 커뮤니케이션 능력 평가.
                    </p>
                  </div>
                </div>
                <div class="interviewResult_tabletitleArea">
                  <div class="interviewResult_tableTitle"><p>질문</p></div>
                  <div class="interviewResult_tableTitle"><p>답변</p></div>
                  <div class="interviewResult_tableTitle" id="scoreTitle">
                    <p>점수</p>
                  </div>
                </div>
                <div class="interviewResult_tablevalueArea_1">
                  <div class="interviewResult_tableValue"><p>-</p></div>
                  <div class="interviewResult_tableValue"><p>-</p></div>
                  <div class="interviewResult_tableValue" id="scoreValue">
                    <p>-</p>
                  </div>
                </div>
                <div class="interviewResult_tablevalueArea_2">
                  <div class="interviewResult_tableValue"><p>-</p></div>
                  <div class="interviewResult_tableValue"><p>-</p></div>
                  <div class="interviewResult_tableValue" id="scoreValue">
                    <p>-</p>
                  </div>
                </div>
                <div class="interviewResult_tablevalueArea_3">
                  <div
                    class="interviewResult_tableValue"
                    id="table_bottomValue"
                  >
                    <p>-</p>
                  </div>
                  <div
                    class="interviewResult_tableValue"
                    id="table_bottomValue"
                  >
                    <p>-</p>
                  </div>
                  <div class="interviewResult_tableValue" id="scoreValue2">
                    <p>-</p>
                  </div>
                </div>
                <div class="table_bottomLine"></div>
                <div class="interviewResult_tabletitleArea">
                  <div class="interviewResult_tableTitle" id="opinionTitle">
                    <p>기타의견</p>
                  </div>
                </div>
                <div class="interviewResult_tablevalueArea_4"><p>-</p></div>
              </div>
              <div class="component__content-column-notice">
                <router-link to="/admin/content/list">
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
