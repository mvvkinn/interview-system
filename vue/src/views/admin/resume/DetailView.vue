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
              <li class="adm__menu-empty"></li>
              <li class="adm__menu-empty"></li>
              <li class="adm__menu-empty"></li>
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
              <div class="adm__rsm-content-img">
                <img src="https://via.placeholder.com/297x358" alt="" />
              </div>
            </div>
            <div class="adm__rsm-content-pd">
              <p class="adm__rsm-content-pd--title">인적사항</p>
              <table class="adm__rsm-content-pd--table">
                <tbody>
                  <tr class="adm__rsm-content-pd--table-top">
                    <th class="adm__rsm-content-pd--table--section-1">이름</th>
                    <td class="adm__rsm-content-pd--table--section-2">
                      <!-- 김명지 -->
                      {{resumelist.name}}
                    </td>
                    <th class="adm__rsm-content-pd--table--section-3">
                      생년월일
                    </th>
                    <td class="adm__rsm-content-pd--table--section-4">
                      <!-- 20010101 -->
                      {{resumelist.birth}}
                    </td>
                  </tr>
                  <tr class="adm__rsm-content-pd--table-middle">
                    <th class="adm__rsm-content-pd--table--section-1">
                      휴대폰
                    </th>
                    <td class="adm__rsm-content-pd--table--section-2">
                      <!-- 01012345678 -->
                      {{resumelist.phone}}
                    </td>
                    <th class="adm__rsm-content-pd--table--section-3">
                      E-mail
                    </th>
                    <td class="adm__rsm-content-pd--table--section-4">
                      <!-- mjc1234@itc.mjc.ac.kr -->
                      {{resumelist.email}}
                    </td>
                  </tr>
                  <tr>
                    <th class="adm__rsm-content-pd--table--section-5">주소</th>
                    <td class="adm__rsm-content-pd--table--section-6">
                      <!-- 서울시 서대문구 어딘가 123-45 101호 -->
                      {{resumelist.address}}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="adm__rsm-content-ei">
              <p class="adm__rsm-content-ei--title">학력사항</p>
              <table class="adm__rsm-content-ei--table">
                <thead>
                  <tr>
                    <th class="adm__rsm-content-ei--table--section-1">기간</th>
                    <th class="adm__rsm-content-ei--table--section-2">
                      학교명
                    </th>
                    <th class="adm__rsm-content-ei--table--section-3">전공</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    :key="index"
                    v-for="(education,index) in education"
                  >
                    <td class="adm__rsm-content-ei--table--section-1">
                      <!-- 08/03/01 - 15/02/01 -->
                      {{education.period}}
                    </td>
                    <td class="adm__rsm-content-ei--table--section-2">
                      <!-- 명지초등학교 -->
                      {{education.schoolname}}
                    </td>
                    <td class="adm__rsm-content-ei--table--section-3">
                      {{education.major}}
                    </td>
                  </tr>
                  <!-- <tr>
                    <td class="adm__rsm-content-ei--table--section-1">
                      15/03/01 - 18/02/01
                    </td>
                    <td class="adm__rsm-content-ei--table--section-2">
                      명지중학교
                    </td>
                    <td class="adm__rsm-content-ei--table--section-3">-</td>
                  </tr>
                  <tr>
                    <td class="adm__rsm-content-ei--table--section-1">
                      18/03/01 - 21/02/01
                    </td>
                    <td class="adm__rsm-content-ei--table--section-2">
                      명지고등학교
                    </td>
                    <td class="adm__rsm-content-ei--table--section-3">-</td>
                  </tr> -->
                </tbody>
              </table>
            </div>
            <div class="adm__rsm-content-et">
              <p class="adm__rsm-content-et--title">자격 및 교육 사항</p>
              <table class="adm__rsm-content-et--table">
                <thead>
                  <tr>
                    <th class="adm__rsm-content-et--table--section-1">기간</th>
                    <th class="adm__rsm-content-et--table--section-2">
                      자격 및 교육명
                    </th>
                    <th class="adm__rsm-content-et--table--section-3">등급</th>
                    <th class="adm__rsm-content-et--table--section-4">
                      발행기관
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    :key="index"
                    v-for="(qualification,index) in qualification"
                  >
                    <td class="adm__rsm-content-et--table--section-1">
                      <!-- 2018/05/16 -->
                      {{qualification.date}}
                    </td>
                    <td class="adm__rsm-content-et--table--section-2">
                      <!-- 워드프로세서 -->
                      {{qualification.education_name}}
                    </td>
                    <td class="adm__rsm-content-et--table--section-3">
                      <!-- 1급 -->
                      {{qualification.class}}
                    </td>
                    <td class="adm__rsm-content-et--table--section-4">
                      <!-- 대한상공회의소 -->
                      {{qualification.institution}}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="adm__rsm-content-btn">
              <router-link to="/admin/resume/list">
                <button>목록으로</button>
              </router-link>
              <hr class="adm__rsm-content-hr" />
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
      interviewlist:{},
      resumelist: {},
      education: [],
      qualification: [],
    }
  },
  async created(){
      const resumeText = await this.$axios.get(
         "https://667e891c-ab9d-4b30-b8f7-37bd394933f3.mock.pstmn.io/noticeapi/resume"
       );
       this.resumelist = resumeText.data;
       this.education = this.resumelist.education;
       this.qualification = this.resumelist.qualification;
       console.log(this.resumelist);

       const interviewText = await this.$axios.get(
        "https://fc1c7bbb-cd92-4929-9a01-be37aacd2ea3.mock.pstmn.io/resumelist"
      );
      this.interviewlist = interviewText.data.interviewlist;
      console.log(this.interviewlist);
    }

};
</script>

<style></style>
