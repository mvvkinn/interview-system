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
          <article class="re-adm">
            <div class="re-adm__interview">
              <div class="re-adm__interview-title">
                <h1>
                  {{interviewNumber.title}}
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
              <div v-if="splitList">
                <router-link 
                  :to="`list/${resume.number}/detail`"
                  :key="index"
                  v-for="(resume,index) in splitList"
                  >
                  <div class="re-adm__interview-content-table-text" >
                    <div class="re-adm__interview-content-table-text-no">
                      <p>{{index + 1 + (pageNum * pageCount - pageCount)}}</p>
                    </div>
                    <div class="re-adm__interview-content-table-text-title">
                      <p>{{resume.resumeTitle}}</p>
                    </div>
                    <div class="re-adm__interview-content-table-text-volunteer">
                      <p>{{resume.person}}</p>
                    </div>
                  </div>
                </router-link>
                <hr />
            </div>
              <div class="notice__interview-page">
                <div class="notice__interview-pagination">
                  <a>&laquo;</a>
                  <a
                    v-for="unit in page"
                    :key="`page-${unit}`"
                    @click="pagination(unit)"
                  >
                    {{unit}}
                  </a>
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
      resumeList: [],
      interviewList:[],
      interviewNumber: {},
      filteredList:[],
      splitList:[],
      pageCount: 10,
      pageNum: 1,
    };
  },
  computed: {
    page(){
      return Math.ceil(this.filteredList.length / 10);
    },
  },
  async created(){
    const resumeText = await this.$axios.get(
      "https://80f083a6-6900-4471-abc4-2578a12a2af3.mock.pstmn.io/interview/resume"
    );
    this.resumeList = resumeText.data.resumelist;

    const interviewText = await this.$axios.get(
      "https://80f083a6-6900-4471-abc4-2578a12a2af3.mock.pstmn.io/interview"
    );

    this.interviewList = interviewText.data.interview;

    this.interviewNumber = this.interviewList.filter(
      (v) => v.number === +this.$route.params.interviewId
    )[0];

    this.filteredList = this.resumeList.filter((v) => v.interviewTitle === this.interviewNumber.title);
    this.pagination(1);

  },
  methods: {
    pagination(num){
      let start = 0;
      let end = this.pageCount;
      if(num===1){
        this.splitList = this.filteredList.filter(
          (v,i) => i >= start && i < end
        );
        this.pageNum = num;
      } else {
        start = this.pageCount * (num-1);
        end = this.pageCount * num;
        this.pageNum = num;
        this.splitList = this.filteredList.filter(
          (v,i) => i >= start && i < end
        );
      }
    }
  }
};
</script>

<style></style>
