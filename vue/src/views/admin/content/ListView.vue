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
              <li class="adm__menu-empty"></li>
              <li class="adm__menu-empty"></li>
              <li class="adm__menu-empty"></li>
            </ul>
          </nav>
          <article class="re-adm">
            <div class="re-adm__interview">
              <div class="re-adm__interview-title">
                <h1>
                  지원자 및 이력서 목록 - 2022년도 하반기 OOOOO 프론트엔드
                  개발자 모집
                </h1>
              </div>
              <hr />
              <div class="re-adm__interview-tab-header">
                <div class="re-adm__interview-content-tab-header-div">
                  <p>번호</p>
                </div>
                <hr />
                <div class="re-adm__interview-content-tab-header-div">
                  <p>이력서 제목</p>
                </div>
                <hr />
                <div class="re-adm__interview-content-tab-header-div">
                  <p>지원자</p>
                </div>
              </div>

              <!-- <div class="re-adm__interview-content-table-text">
                <div class="re-adm__interview-content-table-text-no">
                  <p>1</p>
                </div>
                <div class="re-adm__interview-content-table-text-title">
                  <p>이력서 제목</p>
                </div>
                <div class="re-adm__interview-content-table-text-volunteer">
                  <p>김명지</p>
                </div>
              </div> -->
              <router-link to="/admin/content/detail">
                <div 
                  class="re-adm__interview-content-table-text"
                  :key="index"
                  v-for="(resume,index) in resumelist"
                >
                  <div class="re-adm__interview-content-table-text-no">
                    <!-- <p>2</p> -->
                    <p>{{resume.number}}</p>
                  </div>
                  <div class="re-adm__interview-content-table-text-title">
                    <!-- <p>안녕하십니까 프론트엔드 지원자 김명지 입니다!</p> -->
                    <p>{{resume.resumeTitle}}</p>
                  </div>
                  <div class="re-adm__interview-content-table-text-volunteer">
                    <!-- <p>김명지</p> -->
                    <p>{{resume.person}}</p>
                  </div>
                </div>
              </router-link>
              <!-- <div class="re-adm__interview-content-table-text">
                <div class="re-adm__interview-content-table-text-no">
                  <p>3</p>
                </div>
                <div class="re-adm__interview-content-table-text-title">
                  <p>이력서 제목</p>
                </div>
                <div class="re-adm__interview-content-table-text-volunteer">
                  <p>김명지</p>
                </div>
              </div>
              <div class="re-adm__interview-content-table-text">
                <div class="re-adm__interview-content-table-text-no">
                  <p>4</p>
                </div>
                <div class="re-adm__interview-content-table-text-title">
                  <p>이력서 제목</p>
                </div>
                <div class="re-adm__interview-content-table-text-volunteer">
                  <p>김명지</p>
                </div>
              </div>
              <div class="re-adm__interview-content-table-text">
                <div class="re-adm__interview-content-table-text-no">
                  <p>5</p>
                </div>
                <div class="re-adm__interview-content-table-text-title">
                  <p>이력서 제목</p>
                </div>
                <div class="re-adm__interview-content-table-text-volunteer">
                  <p>김명지</p>
                </div>
              </div>
              <div class="re-adm__interview-content-table-text">
                <div class="re-adm__interview-content-table-text-no">
                  <p>6</p>
                </div>
                <div class="re-adm__interview-content-table-text-title">
                  <p>이력서 제목</p>
                </div>
                <div class="re-adm__interview-content-table-text-volunteer">
                  <p>김명지</p>
                </div>
              </div>
              <div class="re-adm__interview-content-table-text">
                <div class="re-adm__interview-content-table-text-no">
                  <p>7</p>
                </div>
                <div class="re-adm__interview-content-table-text-title">
                  <p>이력서 제목</p>
                </div>
                <div class="re-adm__interview-content-table-text-volunteer">
                  <p>김명지</p>
                </div>
              </div>
              <div class="re-adm__interview-content-table-text">
                <div class="re-adm__interview-content-table-text-no">
                  <p>8</p>
                </div>
                <div class="re-adm__interview-content-table-text-title">
                  <p>이력서 제목</p>
                </div>
                <div class="re-adm__interview-content-table-text-volunteer">
                  <p>김명지</p>
                </div>
              </div>
              <div class="re-adm__interview-content-table-text">
                <div class="re-adm__interview-content-table-text-no">
                  <p>9</p>
                </div>
                <div class="re-adm__interview-content-table-text-title">
                  <p>이력서 제목</p>
                </div>
                <div class="re-adm__interview-content-table-text-volunteer">
                  <p>김명지</p>
                </div>
              </div>
              <div class="re-adm__interview-content-table-text">
                <div class="re-adm__interview-content-table-text-no">
                  <p>10</p>
                </div>
                <div class="re-adm__interview-content-table-text-title">
                  <p>이력서 제목</p>
                </div>
                <div class="re-adm__interview-content-table-text-volunteer">
                  <p>김명지</p>
                </div>
              </div> -->

              <div class="notice__interview-page">
                <div class="notice__interview-pagination">
                  <!-- <a href="#">&laquo;</a>
                  <a class="active" href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">&raquo;</a> -->
                  <a>&laquo;</a>
                  <a class="active">1</a>
                  <a>2</a>
                  <a>3</a>
                  <a>&raquo;</a>
                </div>
              </div>
              <div class="re-adm-content-btn">
                <router-link to="/admin/resume">
                  <button>뒤로가기</button>
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
  data(){
    return {
      resumelist: [],
    };
  },
  async created(){
    const resumeText = await this.$axios.get(
      "https://fc1c7bbb-cd92-4929-9a01-be37aacd2ea3.mock.pstmn.io/resumelist"
    );
    this.resumelist = resumeText.data.resumelist;
    console.log(this.resumelist); //확인용
  },
};
</script>