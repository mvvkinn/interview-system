vu
<template>
  <div>
    <HeaderView />
    <main>
      <section class="find component">
        <div class="component-column">
          <nav class="component-column--nav">
            <ul>
              <router-link to="/mypage/resume">
                <li class="active">
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
                  마이페이지
                </li>
              </router-link>
              <router-link to="/passcheck">
                <li>
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
                  합격자조회
                </li>
              </router-link>
              <router-link to="/notice">
                <li>
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
                  면접 공지
                </li>
              </router-link>
            </ul>
          </nav>
        </div>
        <div class="component-column">
          <nav>
            <ul class="component__menu">
              <li class="component__menu--li">
                <router-link to="/mypage/resume">내 이력서</router-link>
              </li>
              <li class="component__menu--li active">
                <router-link to="/mypage/interview">내 면접</router-link>
              </li>
              <li class="component__menu--li">
                <router-link to="/mypage/changeinfo">개인정보 변경</router-link>
              </li>
              <li></li>
            </ul>
          </nav>
          <article class="component__content">
            <div class="component__content-div">
              <h1>{{ noticelist.title }}</h1>
              <div class="component__content--hr">
                <div class="component__content-info">
                  <div class="component__content-info--div">
                    <p>모집 기간</p>
                    <hr />
                    <p>{{ recruitDate }}</p>
                  </div>
                  <div class="component__content-info--div">
                    <p>날짜</p>
                    <hr />
                    <p>{{ date }}</p>
                    <hr />
                    <p>조회수</p>
                    <hr />
                    <p>156</p>
                  </div>
                </div>
                <img v-bind:src="sliceImage" alt="" />
                <div class="component__content-info--button">
                  <button @click="QRcode" id="blueBtn">QRCode</button>
                  <button @click="moveList">목록</button>
                </div>
              </div>
              <img :src="image" alt="" v-if="isQRcode" />
            </div>
          </article>
        </div>
      </section>
    </main>
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
import QRCode from "qrcode";
export default {
  components: {
    HeaderView,
    FooterView,
  },
  data() {
    return {
      noticelist: [],
      applyResumeList: [],
      imageURL: "",
      image: "",
      isQRcode: false,
    };
  },
  async created() {
    const noticeGet = await this.$axios.get(
      `/notice/read/${this.$route.params.number}`
    );
    this.noticelist = noticeGet.data;

    const applyResume = await this.$axios.get(
      `/apply/applicant?notice_title=${this.noticelist.title}&email=${
        JSON.parse(localStorage.getItem("user")).email
      }`
    );
    this.applyResumeList = applyResume.data;
    console.log(this.applyResumeList);
    const Token = await this.$axios.get(
      `/apply/token?id=${this.id}&email=${this.applyResumeList.user_email}&name=${this.applyResumeList.user_name}&interview_number=${this.applyResumeList.interview_number}`
    );
    QRCode.toDataURL(Token.data, (err, src) => {
      this.image = src;
      // const blob = new Blob([src], { type: "image/png" });
      // this.imageURL = URL.createObjectURL(blob);
    });
  },
  methods: {
    QRcode() {
      this.isQRcode = !this.isQRcode;
    },
    moveList() {
      this.$router.push("/mypage/interview");
    },
  },
  computed: {
    sliceImage() {
      return `/notice/${this.noticelist.image?.split("/")[2]}`;
    },
    date() {
      return this.noticelist.createdAt?.slice(0, 10).split("-").join("/");
    },
    recruitDate() {
      return `${this.noticelist.start_recruit
        ?.slice(0, 16)
        .split("-")
        .join("/")
        .split("T")
        .join(" ")} ~ ${this.noticelist.end_recruit
        ?.slice(0, 16)
        .split("-")
        .join("/")
        .split("T")
        .join(" ")}`;
    },
  },
};
</script>

<style></style>
