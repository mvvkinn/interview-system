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
              <li class="adm__menu-id">
                <router-link to="/admin/content">면접 내용 조회</router-link>
              </li>
              <li class="adm__menu-ci active">
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
                <div class="re-adm__interview-tab-header-div">
                  <p>번호</p>
                </div>
                <hr />
                <div class="re-adm__interview-tab-header-div">
                  <p>이력서 제목</p>
                </div>
                <hr />
                <div class="re-adm__interview-tab-header-div">
                  <p>지원자</p>
                </div>
                <hr />
                <div class="re-adm__interview-tab-header-div">
                  <p>면접 가능 여부</p>
                </div>
                <hr />
                <div class="re-adm__interview-tab-header-div">
                  <p>면접 진행</p>
                </div>
              </div>
              <div v-if="splitList">
                <router-link
                  :to="`list/${resume.number}/detail`"
                  :key="index"
                  v-for="(resume,index) in splitList"
                >
                  <div class="re-adm__interview-table-text">
                    <div class="re-adm__interview-table-text-no">
                      <p>{{index+1}}</p>
                    </div>
                    <div class="re-adm__interview-table-text-title">
                      <p>{{resume.resumeTitle}}</p>
                    </div>
                    <div class="re-adm__interview-table-text-volunteer">
                      <p>{{resume.person}}</p>
                    </div>
                    <div class="re-adm__interview-table-text-possible">
                      <p>가능</p>
                    </div>
                    <div class="re-adm__interview-table-text-on">
                      <router-link :to="`list/${resume.number}/detail`">
                        <button>면접 시작</button>
                      </router-link>
                    </div>
                  </div>
                </router-link>
                <hr />
              </div>
              <div class="notice__interview-page">
                <div class="notice__interview-pagination">
                  <a href="#">&laquo;</a>
                  <a
                    v-for="unit in page"
                    :key="`page-${unit}`"
                    @click="pagination(unit)"
                  >
                    {{unit}}
                  </a>
                  <a href="#">&raquo;</a>
                </div>
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
      interviewNumber:{},
      filteredList:[],
      splitList:[],
      pagecount:10,
    };
  },
  computed:{
    page(){
      return Math.ceil(this.filteredList.length/10);
    }
  },
  async created(){
    const resumeText = await this.$axios.get(
      this.$eMockUp + "/interview/resume"
    );
    this.resumeList = resumeText.data.resumelist;
    const interviewText = await this.$axios.get(
      this.$eMockUp+"/interview"
    );
    this.interviewList = interviewText.data.interview;
    this.interviewNumber = this.interviewList.filter(
      (v) => v.number === +this.$route.params.interviewId
    )[0];
    this.filteredList = this.resumeList.filter((v)=>v.interviewTitle === this.interviewNumber.title);
    this.pagination(1);
  },
  methods:{
    pagination(num){
      let start=0;
      let end=this.pagecount;
      if(num===1){
        this.splitList = this.filteredList.filter(
          (v,i) => i >= start && i < end
        );
      }else {
        start = this.pagecount * (num-1);
        end = this.pagecount * num;
        this.splitList = this.filteredList.filter(
          (v,i) => i >= start && i < end
        );
      }
    }
  }
};
</script>

<style></style>
