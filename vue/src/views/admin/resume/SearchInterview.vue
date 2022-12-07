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
                  >지원자 및 이력서 조회
                </router-link>
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
          <article class="adm__rsm">
            <h1>면접 선택</h1>
            <div>
              <hr />
              <div class="adm__rsm-form">
                <p>이력서를 조회할 면접을 선택하세요.</p>
                <select name="rsm" id="rsm-select" @change="changeValue">
                  <option value="">면접을 선택하세요</option>
                  <option
                  :value="interview.number"
                  :key="index"
                  v-for="(interview,index) in interviewList"
                  >
                    {{interview.title}}
                  </option>
                </select>
                <div id="btn">
                  <div v-if="interviewNum===0">
                    <button @click="errorMessage">조회하기</button>
                  </div>
                  <div v-else>
                    <router-link :to="`/admin/resume/${interviewNum}/list`">
                      <button>조회하기</button>
                    </router-link>
                  </div>
                </div>
              </div>
              <hr />
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
      interviewList: [],
      interviewNum: 0,
    };
  },
  async created(){
    const interviewText = await this.$axios.get(
      "https://8b9634c1-85ba-4027-9009-702300573ece.mock.pstmn.io/interview"
    );
    this.interviewList = interviewText.data.interview;
  },
  methods:{
    changeValue(e){
      this.interviewNum=e.target.value;
    },
    errorMessage(){
      alert('면접을 선택해주세요')
    }
  }
};
</script>

<style></style>

