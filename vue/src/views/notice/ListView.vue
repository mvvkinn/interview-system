vu
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
              <router-link to="/success">
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
        <section class="notice-adm">
          <article class="notice-adm__interview">
            <div class="notice-adm__interview-title">
              <h1>면접 공지사항</h1>
            </div>
            <hr />
            <div class="notice-adm__interview-tab-header">
              <div class="notice-adm__interview-tab-header-div">
                <p>번호</p>
              </div>
              <hr />
              <div class="notice-adm__interview-tab-header-div">
                <p>제목</p>
              </div>
              <hr />
              <div class="notice-adm__interview-tab-header-div">
                <p>날짜</p>
              </div>
              <hr />
              <div class="notice-adm__interview-tab-header-div">
                <p>조회수</p>
              </div>
            </div>

            <div class="notice-adm__interview-table-notice">
              <div class="notice-adm__interview-table-notice-no">
                <p>공지</p>
              </div>
              <div class="notice-adm__interview-table-notice-title">
                <p>면접 지원 안내 및 주의사항</p>
              </div>
              <div class="notice-adm__interview-table-notice-date">
                <p>2022/01/01</p>
              </div>
              <div class="notice-adm__interview-table-notice-views">
                <p>1596</p>
              </div>
            </div>

            <div class="notice-adm__interview-table-text">
              <div class="notice-adm__interview-table-text-no">
                <p>25</p>
              </div>
              <div class="notice-adm__interview-table-text-title">
                <p>2022년도 명지전문대 면접 모집</p>
              </div>
              <div class="notice-adm__interview-table-text-date">
                <p>2022/01/01</p>
              </div>
              <div class="notice-adm__interview-table-text-views">
                <p>159</p>
              </div>
            </div>

            <router-link to="/notice/detail">
              <div class="notice-adm__interview-table-text">
                <div class="notice-adm__interview-table-text-no">
                  <p>24</p>
                </div>
                <div class="notice-adm__interview-table-text-title">
                  <p>2022년도 하반기 OOOOO 프론트엔드 개발자 모집</p>
                </div>
                <div class="notice-adm__interview-table-text-date">
                  <p>2022/01/01</p>
                </div>
                <div class="notice-adm__interview-table-text-views">
                  <p>159</p>
                </div>
              </div>
            </router-link>
            <div class="notice-adm__interview-table-text">
              <div class="notice-adm__interview-table-text-no">
                <p>23</p>
              </div>
              <div class="notice-adm__interview-table-text-title">
                <p>면접 공지 제목 문구</p>
              </div>
              <div class="notice-adm__interview-table-text-date">
                <p>2022/01/01</p>
              </div>
              <div class="notice-adm__interview-table-text-views">
                <p>159</p>
              </div>
            </div>

            <div class="notice-adm__interview-table-text">
              <div class="notice-adm__interview-table-text-no">
                <p>22</p>
              </div>
              <div class="notice-adm__interview-table-text-title">
                <p>면접 공지 제목 문구</p>
              </div>
              <div class="notice-adm__interview-table-text-date">
                <p>2022/01/01</p>
              </div>
              <div class="notice-adm__interview-table-text-views">
                <p>159</p>
              </div>
            </div>

            <div class="notice-adm__interview-table-text">
              <div class="notice-adm__interview-table-text-no">
                <p>21</p>
              </div>
              <div class="notice-adm__interview-table-text-title">
                <p>면접 공지 제목 문구</p>
              </div>
              <div class="notice-adm__interview-table-text-date">
                <p>2022/01/01</p>
              </div>
              <div class="notice-adm__interview-table-text-views">
                <p>159</p>
              </div>
            </div>

            <div class="notice-adm__interview-table-text">
              <div class="notice-adm__interview-table-text-no">
                <p>20</p>
              </div>
              <div class="notice-adm__interview-table-text-title">
                <p>면접 공지 제목 문구</p>
              </div>
              <div class="notice-adm__interview-table-text-date">
                <p>2022/01/01</p>
              </div>
              <div class="notice-adm__interview-table-text-views">
                <p>159</p>
              </div>
            </div>

            <div class="notice-adm__interview-table-text">
              <div class="notice-adm__interview-table-text-no">
                <p>19</p>
              </div>
              <div class="notice-adm__interview-table-text-title">
                <p>면접 공지 제목 문구</p>
              </div>
              <div class="notice-adm__interview-table-text-date">
                <p>2022/01/01</p>
              </div>
              <div class="notice-adm__interview-table-text-views">
                <p>159</p>
              </div>
            </div>

            <div class="notice-adm__interview-table-text">
              <div class="notice-adm__interview-table-text-no">
                <p>18</p>
              </div>
              <div class="notice-adm__interview-table-text-title">
                <p>면접 공지 제목 문구</p>
              </div>
              <div class="notice-adm__interview-table-text-date">
                <p>2022/01/01</p>
              </div>
              <div class="notice-adm__interview-table-text-views">
                <p>159</p>
              </div>
            </div>

            <div class="notice-adm__interview-table-text">
              <div class="notice-adm__interview-table-text-no">
                <p>17</p>
              </div>
              <div class="notice-adm__interview-table-text-title">
                <p>면접 공지 제목 문구</p>
              </div>
              <div class="notice-adm__interview-table-text-date">
                <p>2022/01/01</p>
              </div>
              <div class="notice-adm__interview-table-text-views">
                <p>159</p>
              </div>
            </div>

            <div class="notice-adm__interview-table-text">
              <div class="notice-adm__interview-table-text-no">
                <p>16</p>
              </div>
              <div class="notice-adm__interview-table-text-title">
                <p>면접 공지 제목 문구</p>
              </div>
              <div class="notice-adm__interview-table-text-date">
                <p>2022/01/01</p>
              </div>
              <div class="notice-adm__interview-table-text-views">
                <p>159</p>
              </div>
            </div>

            <div class="notice__interview-page">
              <div class="notice__interview-pagination">
                <a href="#">&laquo;</a>
                <a class="active" href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">&raquo;</a>
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
