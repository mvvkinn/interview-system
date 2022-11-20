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
          <article class="adm__rsm">
            <h1>면접 선택</h1>
            <div>
              <hr />
              <div class="adm__rsm-form">
                <p>목록을 불러올 면접을 선택하세요.</p>
                <select name="rsm" id="rsm-select" @change="changeValue">
                  <option value="">면접을 선택하세요</option>
                  <!-- <option value="a">a</option>
                  <option value="b">b</option>
                  <option value="c">c</option>
                  <option value="d">d</option>
                  <option value="e">e</option>
                  <option value="f">f</option> -->
                  <option
                    :value="resume.number"
                    :key="index"
                    v-for="(resume,index) in resumelist"
                  >
                    {{resume.title}}
                  </option>
                </select>
                <div id="btn">
                  <div v-if="num===0">
                    <button @click="errorMessage">조회하기</button>
                  </div>
                  <div v-else>
                    <router-link :to="`/admin/content/${num}/list`">
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
       resumelist: [],
       number: {},
       num: 0,
     };
   },
   async created(){
     const resumeText = await this.$axios.get(
       "https://c6d0e1b2-5e9a-4d8e-85ec-52bd5bbbd8eb.mock.pstmn.io/noticeapi/list"
     );
     this.resumelist = resumeText.data.noticelist;
     console.log(this.resumelist); //확인용

     this.number = this.resumelist.filter(
      (v) => v.number === this.$route.params.number
    );
    // console.log(this.number);
   },

   methods:{
    changeValue(e){
      this.num = e.target.value;
    },
    errorMessage(){
      alert('면접을 선택해주세요')
    }
   }
};
</script>

<style></style>
