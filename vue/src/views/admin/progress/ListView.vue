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
                  {{ interviewNumber.title }}
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
                <!-- <div class="re-adm__interview-tab-header-div">
                  <p>면접 가능 여부</p>
                </div> -->
                <!-- <hr /> -->
                <div class="re-adm__interview-tab-header-div">
                  <p>합격 여부</p>
                </div>
                <hr />
                <div class="re-adm__interview-tab-header-div">
                  <p>면접 진행</p>
                </div>
              </div>
              <div v-if="splitList">
                <!-- <router-link
                  :to="`list/${resume.number}`"
                  :key="index"
                  v-for="(resume, index) in splitList"
                > -->
                <div
                  class="re-adm__interview-table-text"
                  :key="index"
                  v-for="(resume, index) in splitList"
                >
                  <div class="re-adm__interview-table-text-no">
                    <p>{{ index + 1 + (pageNum * pagecount - pagecount) }}</p>
                  </div>
                  <div class="re-adm__interview-table-text-title">
                    <p>{{ resume.resumeTitle }}</p>
                  </div>
                  <div class="re-adm__interview-table-text-volunteer">
                    <p>{{ resume.person }}</p>
                  </div>
                  <div class="re-adm__interview-table-text-success">
                    <!-- <p>합격</p> -->
                    <button 
                      @click.prevent="successPost(resume.number)" 
                      :class="{background:backgroundBtn, color:colorBtn}"
                      type="submit"
                    >
                    합격
                    </button>
                  </div>
                  <div class="re-adm__interview-table-text-on">
                    <button @click.prevent="applyGet(resume.number)">
                      온라인 면접
                    </button>
                    <button @click.prevent="applyGet(resume.number)">
                      오프라인 면접
                    </button>
                  </div>
                  <!-- <div class="re-adm__interview-table-text-success">
                    <button>
                      합격
                    </button>
                  </div> -->
                </div>
                <!-- </router-link> -->
                <!-- <hr /> -->
              </div>
              <div class="notice__interview-page">
                <div class="notice__interview-pagination">
                  <a>&laquo;</a>
                  <a
                    v-for="unit in page"
                    :key="`page-${unit}`"
                    @click="pagination(unit)"
                  >
                    {{ unit }}
                  </a>
                  <a>&raquo;</a>
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
  data() {
    return {
      resumeList: [],
      interviewList: [],
      interviewNumber: {},
      filteredList: [],
      splitList: [],
      pagecount: 10,
      pageNum: 1,
      resume: {},
      // -- score result --
      backgroundBtn: false,
      colorBtn: false,
      success: 0,
    };
  },
  computed: {
    page() {
      return Math.ceil(this.filteredList.length / 10);
    },
  },
  async created() {
    const resumeText = await this.$axios.get(
      "https://1f7e8739-9ff7-4489-b58c-08e6d4bb6681.mock.pstmn.io/interview/resume"
    );
    this.resumeList = resumeText.data.resumelist;
    const interviewText = await this.$axios.get(
      "https://1f7e8739-9ff7-4489-b58c-08e6d4bb6681.mock.pstmn.io/interview"
    );
    this.interviewList = interviewText.data.interview;
    this.interviewNumber = this.interviewList.filter(
      (v) => v.number === +this.$route.params.interviewId
    )[0];
    this.filteredList = this.resumeList.filter(
      (v) => v.interviewTitle === this.interviewNumber.title
    );
    this.pagination(1);
  },
  methods: {
    pagination(num) {
      let start = 0;
      let end = this.pagecount;
      if (num === 1) {
        this.splitList = this.filteredList.filter(
          (v, i) => i >= start && i < end
        );
      } else {
        start = this.pagecount * (num - 1);
        end = this.pagecount * num;
        this.pageNum = num;
        this.splitList = this.filteredList.filter(
          (v, i) => i >= start && i < end
        );
      }
    },
    async applyGet(index) {
      this.resume = this.resumeList.filter((v) => v.number === index)[0];
      await this.$axios
        .get(
          `/apply/?title=${this.resume.interviewTitle}&user_name=${this.resume.person}`
        )
        .then((res) => {
          // this.$router.push(
          //   `list/${this.resume.number}/${res.data.interview_number}`
          // );
          this.$router.push(`/meeting/${res.data.interview_number}`);
        });
    },
    async successPost(index){
      this.backgroundBtn =!this.backgroundBtn;
      this.colorBtn =! this.colorBtn;
      this.resume = this.resumeList.filter((v) => v.number === index)[0];
      
      this.scoreGet = await this.$axios.get(
        // `/score/read?id=${this.id}&email=${this.email}&name=${this.name}`
        "/score/read/?id=1&email=admin&name=이설아&notice_title=[추천채용] [패스오더] 급성장중인 스타트업 'Web Front-End 개발자' 채용"
        // `/score/read/?email=${this.email}&name=${this.name}&notice_title=${this.notice_title}`
      );
      this.scoreData = this.scoreGet.data;
      // console.log(this.scoreGet);
      this.success = (this.scoreData.success)+1;
      console.log(this.success);
    }
  },
};
</script>

<style scoped>
.re-adm__interview-table-text-on button {
  margin: 0 5px;
}

.re-adm__interview-table-text-success button:active {
  background-color: #3c62e5;
  color: white;
  border: none;
}

.background {
  background-color: #3c62e5;
}

.color {
  color: white;
}
</style>