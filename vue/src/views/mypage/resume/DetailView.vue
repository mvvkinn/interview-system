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
              <!-- router link to = /success -->
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
              <li class="component__menu--li active">
                <router-link to="/mypage/resume">내 이력서</router-link>
              </li>
              <li class="component__menu--li">
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
              <!-- <h1>이력서 제목1</h1> -->
              <input type="text" v-model="data.title" placeholder="이력서 1" />
              <form class="component__content--hr">
                <div class="component__content-column">
                  <div class="component__content-column--img">
                    <img :src="uploadImg" alt="" />
                    <button>이미지 업로드</button>
                    <input
                      type="file"
                      id="file"
                      accept="image/*"
                      @change="upload"
                    />
                    <label for="file">이미지 업로드</label>
                  </div>
                </div>
                <div class="notice_component_tableArea">
                  <div class="notice_component_tableTitle">인적사항</div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_title">이름</div>
                    <textarea
                      class="tableComponent_value"
                      v-model="user_name"
                      placeholder="이름을 입력해주세요."
                    ></textarea>
                    <div class="tableComponent_title">생년월일</div>
                    <textarea
                      class="tableComponent_value"
                      v-model="user_birthdate"
                      placeholder="생년 6자리를 입력해주세요."
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_title">휴대폰</div>
                    <textarea
                      class="tableComponent_value"
                      v-model="user_phone"
                      placeholder="'-'제외하고 입력"
                    ></textarea>
                    <div class="tableComponent_title" id="emailTitle">
                      E-mail
                    </div>
                    <textarea
                      class="tableComponent_value"
                      v-model="data.user_email"
                      placeholder="이메일을 입력해주세요."
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine" id="addressLine">
                    <div class="tableComponent_title" id="addressTitle">
                      주소
                    </div>
                    <textarea
                      class="tableComponent_value"
                      v-model="user_address"
                      placeholder="'-'제외하고 입력"
                      id="addressTextArea"
                    ></textarea>
                  </div>
                </div>
                <div class="notice_component_tableArea">
                  <div class="notice_component_tableTitle">학력사항</div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_titleBlack" id="titleBlack_side">
                      기간
                    </div>
                    <div
                      class="tableComponent_titleBlack"
                      id="titleBlack_center"
                    >
                      학교명
                    </div>
                    <div class="tableComponent_titleBlack" id="titleBlack_side">
                      전공
                    </div>
                  </div>
                  <div
                    class="notice_componet_tableLine"
                    v-for="index in eduNumber"
                    :key="index"
                  >
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      v-model="data.period"
                      placeholder="예)220101 ~ 220101"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_center"
                      v-model="data.school"
                      placeholder="학교명을 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      v-model="data.major"
                      placeholder="전공을 입력해주세요."
                    ></textarea>
                  </div>
                  <button
                    class="notice_componet_tableLine"
                    id="addLine"
                    @click.prevent="addLine('1')"
                  >
                    +
                  </button>
                </div>
                <div class="notice_component_tableArea">
                  <div class="notice_component_tableTitle">
                    자격 및 교육사항
                  </div>
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
                    <div
                      class="tableComponent_titleBlack"
                      id="titleBlack_rating"
                    >
                      등급
                    </div>
                    <div class="tableComponent_titleBlack" id="titleBlack_side">
                      발행기관
                    </div>
                  </div>
                  <div
                    class="notice_componet_tableLine"
                    v-for="index in certificaNumber"
                    :key="index"
                  >
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      v-model="data.acquisition_date"
                      placeholder="예)220101"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_classname"
                      v-model="data.certificate"
                      placeholder="자격 및 교육명을 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_rating"
                      v-model="data.rating"
                      placeholder="등급을 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      v-model="data.issuer"
                      placeholder="발행기관을 입력해주세요."
                    ></textarea>
                  </div>
                  <button
                    class="notice_componet_tableLine"
                    id="addLine"
                    @click.prevent="addLine('2')"
                  >
                    +
                  </button>
                </div>
                <div class="notice_component_tableArea">
                  <div class="notice_component_tableTitle">대외활동</div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_titleBlack" id="titleBlack_side">
                      기간
                    </div>
                    <div
                      class="tableComponent_titleBlack gubun"
                      id="titleBlack_classname"
                    >
                      구분
                    </div>
                    <div
                      class="tableComponent_titleBlack"
                      id="titleBlack_rating"
                    >
                      기관/장소
                    </div>
                    <div
                      class="tableComponent_titleBlack content"
                      id="titleBlack_side"
                    >
                      활동 내용
                    </div>
                  </div>
                  <div
                    class="notice_componet_tableLine"
                    v-for="index in activityNumber"
                    :key="index"
                  >
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      placeholder="예)2022.09 ~ 2023.01"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack gubun"
                      id="valueBlack_classname"
                      placeholder="동아리"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_rating"
                      placeholder="명지전문대학"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack content"
                      id="valueBlack_side"
                      placeholder="활동한 내용을 입력해주세요."
                    ></textarea>
                  </div>
                  <button
                    class="notice_componet_tableLine"
                    id="addLine"
                    @click.prevent="addLine('3')"
                  >
                    +
                  </button>
                </div>
                <div class="notice_component_tableArea">
                  <div class="notice_component_tableTitle">자기소개서</div>
                  <div class="notice_componet_tableLine">
                    <div
                      class="tableComponent_titleBlack resume"
                      id="titleBlack_side"
                    >
                      자유형식
                    </div>
                  </div>
                  <div class="notice_componet_tableLine_resume">
                    <textarea
                      class="resume_textarea"
                      id="valueBlack_side"
                      placeholder="자유롭게 작성해주세요."
                    ></textarea>
                  </div>
                </div>
                <div class="component__content-column">
                  <div class="component__content-column--button">
                    <button id="blueBtn" @click.prevent="regist">
                      저장하기
                    </button>
                    <button id="blackBtn">삭제</button>
                    <router-link to="/mypage/resume/list">
                      <button id="grayBtn">목록</button>
                    </router-link>
                  </div>
                </div>
              </form>
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
import { store } from "@/store";
// import { read } from "fs";
export default {
  components: {
    HeaderView,
    FooterView,
  },
  data() {
    return {
      eduNumber: 1,
      certificaNumber: 1,
      activityNumber: 1,
      changeImage: "",
      data: {
        title: "",
        image: "",
        period: null,
        school: "",
        major: "",
        acquisition_date: null,
        certificate: "",
        rating: "",
        issuer: "",
        user_email: JSON.parse(localStorage.getItem("user")).email,
      },
      user_name: JSON.parse(localStorage.getItem("user")).name,
      user_birthdate: JSON.parse(localStorage.getItem("user")).birthdate,
      user_phone: JSON.parse(localStorage.getItem("user")).phone,
      user_address: JSON.parse(localStorage.getItem("user")).address,
    };
  },
  methods: {
    addLine(i) {
      switch (+i) {
        case 1:
          this.eduNumber++;
          break;
        case 2:
          this.certificaNumber++;
          break;
        case 3:
          this.activityNumber++;
          break;
      }
    },
    regist() {
      const resume = this.data;
      store.dispatch("registResume", { ...resume }).then((res) => {
        console.log(res);
      });
    },
    upload(e) {
      let file = e.target.files;
      let reader = new FileReader();
      let formData = new FormData();

      reader.readAsDataURL(file[0]);
      // 사진 띄우기
      reader.onload = (e) => {
        this.changeImage = e.target.result;
      };
      // formData에 사진 추가
      formData.append("image", file[0]);
      store.dispatch("upload", formData).then((res) => {
        // 서버 uploads폴더 사진 경로를 저장
        this.data.image = res;
      });
    },
  },
  computed: {
    uploadImg() {
      return this.changeImage === ""
        ? "https://via.placeholder.com/297x358"
        : this.changeImage;
    },
  },
};
</script>

<style scoped>
.resume {
  width: 100% !important;
}

.notice_componet_tableLine_resume {
  width: 100%;
  display: flex;
}

.resume_textarea {
  width: 100% !important;
  min-height: 400px;
  height: 100%;
  border: 1px solid #333;
  padding-left: 10px;
  font-family: noto sans kr;
  font-size: 14px;
  color: #333;
  font-weight: 300;
  resize: none;
  outline: none;
  line-height: 3.2vh;
}

.gubun {
  width: 15% !important;
}

.content {
  width: 50% !important;
}

#addLine {
  border: none;
}
</style>
