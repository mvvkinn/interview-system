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
                  {{number.title}}
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
              <div v-if="splitlist">
                <router-link
                  :to="`/admin/content/${$route.params.number}/detail`"
                  :key="index"
                  v-for="(resume,index) in splitlist">
                  <div class="re-adm__interview-content-table-text">
                    <div class="re-adm__interview-content-table-text-no">
                      <p>{{resume.number}}</p>
                    </div>
                    <div class="re-adm__interview-content-table-text-title">
                      <p>{{resume.resumeTitle}}</p>
                    </div>
                    <div class="re-adm__interview-content-table-text-volunteer">
                      <p>{{resume.person}}</p>
                    </div>
                  </div>
                </router-link>
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
                <router-link to="/admin/content">
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
      splitlist:[],
      pagecount:10,
      noticelist:[],
      number:{},
    };
  },
  computed:{
    page(){
      return Math.ceil(this.resumelist.length/10);
    }
  },
  async created(){
    const resumeText = await this.$axios.get(
      "https://c6d0e1b2-5e9a-4d8e-85ec-52bd5bbbd8eb.mock.pstmn.io/noticeapi/resumelist"
    );
    this.resumelist = resumeText.data.resumelist;
    this.pagination(1);

    const noticeText = await this.$axios.get(
      "https://c6d0e1b2-5e9a-4d8e-85ec-52bd5bbbd8eb.mock.pstmn.io/noticeapi/list"
    );
    this.noticelist = noticeText.data.noticelist;

    this.number = this.noticelist.filter(
      (v) => v.number === +this.$route.params.number
    )[0];
  },
  methods:{
    pagination(num){
      let start=0;
      let end=this.pagecount;
      if(num===1){
        this.splitlist = this.resumelist.filter(
          (v,i) => i >= start && i < end
        );
      }else {
        start = this.pagecount * (num-1);
        end = this.pagecount * num;
        this.splitlist = this.resumelist.filter(
          (v,i) => i >= start && i < end
        );
      }
    }
  }
};
</script>