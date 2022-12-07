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
              <!-- router link to = /success -->
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
            </div>
            <div class="adm_contentArea">
              <img v-bind:src="resumeDetail.img" alt="" />
              <div class="notice_component_tableArea">
                <div class="notice_component_tableTitle">인적사항</div>
                <div class="notice_componet_tableLine">
                  <div class="tableComponent_title">이름</div>
                  <div class="adm_tableComponent_value">{{resumeDetail.name}}</div>
                  <div class="tableComponent_title">생년월일</div>
                  <div class="adm_tableComponent_value">{{resumeDetail.birth}}</div>
                </div>
                <div class="notice_componet_tableLine">
                  <div class="tableComponent_title">휴대폰</div>
                  <div class="adm_tableComponent_value">{{resumeDetail.phone}}</div>
                  <div class="tableComponent_title" id="emailTitle">E-mail</div>
                  <div class="adm_tableComponent_value">{{resumeDetail.email}}</div>
                </div>
                <div class="notice_componet_tableLine" id="addressLine">
                  <div class="tableComponent_title" id="addressTitle">주소</div>
                  <div
                    class="adm_tableComponent_value"
                    id="adm_addressTextArea"
                  >
                    {{resumeDetail.address}}
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
                <div class="notice_componet_tableLine" :key="index" v-for="(education,index) in education">
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    {{education.period}}
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_center"
                  >
                    {{education.schoolname}}
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    {{education.major}}
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
                <div class="notice_componet_tableLine" :key="index" v-for="(qualification,index) in qualification">
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    {{qualification.date}}
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_classname"
                  >
                    {{qualification.education_name}}
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_rating"
                  >
                    {{qualification.class}}
                  </div>
                  <div
                    class="adm_tableComponent_valueBlack"
                    id="adm_valueBlack_side"
                  >
                    {{qualification.institution}}
                  </div>
                </div>
              </div>
              <div class="component__content-column-notice">
                <router-link :to="`/admin/resume/${interviewId}/list`">
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
        "https://80f083a6-6900-4471-abc4-2578a12a2af3.mock.pstmn.io/interview/resume"
      );
      this.resumeList = resumeText.data.resumelist;
      this.resumeNumber = this.resumeList.filter(
      (v) => v.number === +this.$route.params.number
    )[0];

    this.resumeDetail = this.detailList.filter((v)=>v.title === this.resumeNumber.resumeTitle)[0];
    
    this.education = this.resumeDetail.education;
    this.qualification = this.resumeDetail.qualification;

    const interviewText = await this.$axios.get(
      "https://80f083a6-6900-4471-abc4-2578a12a2af3.mock.pstmn.io/interview"
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

