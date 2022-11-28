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
              <h1>
                {{resumeNumber.resumeTitle}}
              </h1>
              <div class="adm__rsm-content--hr">
                <div class="adm__rsm-content-info">
                  <div class="adm__rsm-content-info--div-1">
                    <p>지원 면접</p>
                  </div>
                  <hr />
                  <div class="adm__rsm-content-info--div-2">
                    <p>{{resumeNumber.interviewTitle}}</p>
                  </div>
                  <hr />
                  <div class="adm__rsm-content-info--div-3">
                    <p>지원자</p>
                  </div>
                  <hr />
                  <div class="adm__rsm-content-info--div-4">
                    <p>{{resumeNumber.person}}</p>
                  </div>
                </div>
              </div>
              <div class="adm__rsm-content-img">
                <img v-bind:src="resumeDetail.img" alt="" />
              </div>
            </div>
            <div class="adm__rsm-content-pd">
              <p class="adm__rsm-content-pd--title">인적사항</p>
              <table class="adm__rsm-content-pd--table">
                <tbody>
                  <tr class="adm__rsm-content-pd--table-top">
                    <th class="adm__rsm-content-pd--table--section-1">이름</th>
                    <td class="adm__rsm-content-pd--table--section-2">
                      {{resumeDetail.name}}
                    </td>
                    <th class="adm__rsm-content-pd--table--section-3">
                      생년월일
                    </th>
                    <td class="adm__rsm-content-pd--table--section-4">
                      {{resumeDetail.birth}}
                    </td>
                  </tr>
                  <tr class="adm__rsm-content-pd--table-middle">
                    <th class="adm__rsm-content-pd--table--section-1">
                      휴대폰
                    </th>
                    <td class="adm__rsm-content-pd--table--section-2">
                      {{resumeDetail.phone}}
                    </td>
                    <th class="adm__rsm-content-pd--table--section-3">
                      E-mail
                    </th>
                    <td class="adm__rsm-content-pd--table--section-4">
                      {{resumeDetail.email}}
                    </td>
                  </tr>
                  <tr>
                    <th class="adm__rsm-content-pd--table--section-5">주소</th>
                    <td class="adm__rsm-content-pd--table--section-6">
                      {{resumeDetail.address}}
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
                      {{education.period}}
                    </td>
                    <td class="adm__rsm-content-ei--table--section-2">
                      {{education.schoolname}}
                    </td>
                    <td class="adm__rsm-content-ei--table--section-3">
                      {{education.major}}
                    </td>
                  </tr>
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
                      {{qualification.date}}
                    </td>
                    <td class="adm__rsm-content-et--table--section-2">
                      {{qualification.education_name}}
                    </td>
                    <td class="adm__rsm-content-et--table--section-3">
                      {{qualification.class}}
                    </td>
                    <td class="adm__rsm-content-et--table--section-4">
                      {{qualification.institution}}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="adm__rsm-content-btn">
              <router-link :to="`/admin/resume/${interviewId}/list`">
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
      detailList: {},
      resumeList:{},
      resumeNumber:{},
      resumeDetail:[],
      education: [],
      qualification: [],
      interviewList:{},
      interviewNumber: {},
      interviewId:{},
    }
  },
  async created(){
      const detailText = await this.$axios.get(
         "https://8b9634c1-85ba-4027-9009-702300573ece.mock.pstmn.io/interview/resume/detail"
       );
       this.detailList = detailText.data.detail;

       const resumeText = await this.$axios.get(
        "https://8b9634c1-85ba-4027-9009-702300573ece.mock.pstmn.io/interview/resume"
      );
      this.resumeList = resumeText.data.resumelist;
      this.resumeNumber = this.resumeList.filter(
      (v) => v.number === +this.$route.params.number
    )[0];

    this.resumeDetail = this.detailList.filter((v)=>v.title === this.resumeNumber.resumeTitle)[0];
    
    this.education = this.resumeDetail.education;
    this.qualification = this.resumeDetail.qualification;

    const interviewText = await this.$axios.get(
      "https://8b9634c1-85ba-4027-9009-702300573ece.mock.pstmn.io/interview"
    );

    this.interviewList = interviewText.data.interview;

    this.interviewNumber = this.interviewList.filter(
      (v) => v.number === +this.$route.params.interviewId
    )[0];
    
    this.interviewId = this.interviewNumber.number;

    },

};
</script>

<style></style>

