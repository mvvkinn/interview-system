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
              <input
                type="text"
                ref="resumeTitle"
                v-model="resume.title"
                placeholder="이력서 1"
              />
              <form class="component__content--hr">
                <div class="component__content-column">
                  <div class="component__content-column--img" v-if="currentId">
                    <img :src="updateImg" alt="" />
                    <label for="file">이미지 업로드</label>
                    <input
                      type="file"
                      id="file"
                      accept="image/*"
                      @change="upload"
                    />
                  </div>
                  <div class="component__content-column--img" v-else>
                    <img :src="uploadImg" alt="" />
                    <label for="file">이미지 업로드</label>
                    <input
                      type="file"
                      id="file"
                      accept="image/*"
                      @change="upload"
                    />
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
                      readonly
                    ></textarea>
                    <div class="tableComponent_title">생년월일</div>
                    <textarea
                      class="tableComponent_value"
                      v-model="user_birthdate"
                      placeholder="생년 6자리를 입력해주세요."
                      readonly
                    ></textarea>
                  </div>
                  <div class="notice_componet_tableLine">
                    <div class="tableComponent_title">휴대폰</div>
                    <textarea
                      class="tableComponent_value"
                      v-model="user_phone"
                      placeholder="'-'제외하고 입력"
                      readonly
                    ></textarea>
                    <div class="tableComponent_title" id="emailTitle">
                      E-mail
                    </div>
                    <textarea
                      class="tableComponent_value"
                      v-model="resume.user_email"
                      placeholder="이메일을 입력해주세요."
                      readonly
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
                      readonly
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
                    v-for="(education, index) in education"
                    :key="index"
                  >
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      v-model="education.period"
                      placeholder="예)2022.09 ~ 2023.01"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_center"
                      v-model="education.school"
                      placeholder="학교명을 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      v-model="education.major"
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
                    v-for="(certificate, index) in certificate"
                    :key="index"
                  >
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      v-model="certificate.acquisition_date"
                      placeholder="예)2022.09"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_classname"
                      v-model="certificate.certificate"
                      placeholder="자격 및 교육명을 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_rating"
                      v-model="certificate.rating"
                      placeholder="등급을 입력해주세요."
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      v-model="certificate.issuer"
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
                    v-for="(activity, index) in activity"
                    :key="index"
                  >
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_side"
                      v-model="activity.period"
                      placeholder="예)2022.09 ~ 2023.01"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack gubun"
                      id="valueBlack_classname"
                      v-model="activity.gubun"
                      placeholder="동아리"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack"
                      id="valueBlack_rating"
                      v-model="activity.location"
                      placeholder="명지전문대학"
                    ></textarea>
                    <textarea
                      class="tableComponent_valueBlack content"
                      id="valueBlack_side"
                      v-model="activity.content"
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
                      v-model="resume.cover_letter"
                      placeholder="자유롭게 작성해주세요."
                    ></textarea>
                  </div>
                </div>
                <div class="component__content-column">
                  <div class="component__content-column--button">
                    <button
                      id="blueBtn"
                      @click.prevent="amendForm"
                      v-if="currentId"
                    >
                      수정하기
                    </button>
                    <button id="blueBtn" @click.prevent="regist" v-else>
                      저장하기
                    </button>
                    <button
                      id="blackBtn"
                      @click.prevent="deleteResume"
                      v-if="currentId"
                    >
                      삭제
                    </button>
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
import axios from "axios";

export default {
  components: {
    HeaderView,
    FooterView,
  },
  data() {
    return {
      changeImage: "",
      currentId: 0,
      education: [
        {
          period: "",
          school: "",
          major: "",
        },
      ],
      certificate: [
        {
          acquisition_date: "",
          certificate: "",
          rating: "",
          issuer: "",
        },
      ],
      activity: [
        {
          period: "",
          gubun: "",
          location: "",
          content: "",
        },
      ],
      resume: {
        title: "",
        image: "",
        education: [
          {
            period: "",
            school: "",
            major: "",
          },
        ],
        certificate: [
          {
            acquisition_date: "",
            certificate: "",
            rating: "",
            issuer: "",
          },
        ],
        activity: [
          {
            period: "",
            gubun: "",
            location: "",
            content: "",
          },
        ],
        cover_letter: "",
        user_email: JSON.parse(localStorage.getItem("user")).email,
      },
      user_name: JSON.parse(localStorage.getItem("user")).name,
      user_birthdate: JSON.parse(localStorage.getItem("user")).birthdate,
      user_phone: JSON.parse(localStorage.getItem("user")).phone,
      user_address: JSON.parse(localStorage.getItem("user")).address,
      closeBtn: false,
    };
  },
  async beforeRouteEnter(to, from, next) {
    const id = +to.params.id;
    const data = await axios.get(`/resume?id=${id}`);

    if (id) {
      next((vm) => {
        vm.resume = data.data[0];
        vm.education = vm.resume.education;
        vm.certificate = vm.resume.certificate;
        vm.activity = vm.resume.activity;
        vm.currentId = id;
      });
    } else {
      next((vm) => (vm.currentId = null));
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.closeBtn) {
      if (
        confirm(
          "저장하시지 않으면 현재 작성 한 내용이 사라집니다. \n정말 나가시겠습니까?"
        )
      ) {
        next();
      }
    } else {
      next();
    }
  },
  methods: {
    closeButton() {
      this.closeBtn = true;
      this.$router.push("/mypage/resume/list");
    },
    addLine(i) {
      switch (+i) {
        case 1:
          if (
            // 이력서 등록할 때
            this.education[this.education.length - 1].period &&
            this.education[this.education.length - 1].school &&
            this.education[this.education.length - 1].major
          ) {
            this.education.push({
              period: "",
              school: "",
              rating: "",
              issuer: "",
            });
            this.resume.education = this.education;
          }
          break;
        case 2:
          if (
            this.certificate[this.certificate.length - 1].acquisition_date &&
            this.certificate[this.certificate.length - 1].certificate &&
            this.certificate[this.certificate.length - 1].rating &&
            this.certificate[this.certificate.length - 1].issuer
          ) {
            this.certificate.push({
              acquisition_date: "",
              certificate: "",
              rating: "",
              issuer: "",
            });
            this.resume.certificate = this.certificate;
          }
          break;
        case 3:
          if (
            this.activity[this.activity.length - 1].period &&
            this.activity[this.activity.length - 1].gubun &&
            this.activity[this.activity.length - 1].location &&
            this.activity[this.activity.length - 1].content
          ) {
            this.activity.push({
              period: "",
              gubun: "",
              location: "",
              content: "",
            });
            this.resume.activity = this.activity;
          }
          break;
      }
    },
    regist() {
      if (this.resume.title !== "") {
        const data = {
          title: this.resume.title,
          image: this.resume.image,
          education: this.education,
          certificate: this.certificate,
          activity: this.activity,
          cover_letter: this.resume.cover_letter,
          user_email: this.resume.user_email,
        };

        store.dispatch("registResume", { ...data }).then((res) => {
          if (res === 201) {
            this.$router.push("/mypage/resume/list");
          }
        });
      } else {
        this.$refs.resumeTitle.focus();
        alert("이력서 제목을 입력해주세요!");
      }
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
        this.resume.image = res;
      });
    },
    async deleteResume() {
      await axios.delete(`/resume/${this.currentId}`).then((res) => {
        if (res.status === 201) {
          this.$router.push("/mypage/resume/list");
        }
      });
    },

    async amendForm() {
      const data = {
        id: this.currentId,
        title: this.resume.title,
        image: this.resume.image,
        education: this.education,
        certificate: this.certificate,
        activity: this.activity,
        cover_letter: this.resume.cover_letter,
      };

      store.dispatch("amendResume", { ...data }).then((res) => {
        if (res === 201) {
          this.$router.push("/mypage/resume/list");
        } else {
          console.log(this.data);
        }
      });
    },
  },
  computed: {
    uploadImg() {
      return this.changeImage === ""
        ? "https://via.placeholder.com/297x358"
        : this.changeImage;
    },
    updateImg() {
      return (
        // `/${this.resume.image?.split("\\")[1]}` ||
        `/${this.resume.image?.split("/")[1]}`
      );
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

.button-gubun {
  margin: 0 10px;
}

.content {
  width: 50% !important;
}

#addLine {
  border: none;
}
</style>
